import { Title } from "../style/Footer_Styled";
import { Container, Wrapper, FORM, FIELD, LABEL, INPUT, BUTTON, BUTTONFILED, Imagelabel, SELECTFILE, LEFT, RIGHT, CENTER } from "../style/AddingSong_styled";
import ImageIcon from '@mui/icons-material/Image';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddArtistModal from "./AddArtistModal";
import { userRequest } from "../api/requestMethod";
import Select from "react-select";
import { useNavigate } from "react-router-dom";


const AddingSong = () => {

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [ArtistList, setArtistList] = useState([]);

  const [formData, setFormData] = useState({
    Name: "",
    DateOfRelease: "",
    Artist: [],
    file: null,
  });
  const handleImageChange = (e) => {
    const imgdata = e.target.files[0]

    setFormData({ ...formData, file: imgdata });


  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleMultiChange = (e) => {
    const value = (Array.isArray(e) ? e.map(item => item.value) : []);
    setFormData({ ...formData, Artist: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    userRequest.post("/songs/create", formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(res => {
      console.log(res);
    }
    ).catch(err => {
      console.log(err);
    }
    );

  }

  useEffect(() => {
    const getArtists = async () => {
      try {
        const response = await userRequest.get("/artists/getAll");

        const artistList = response.data.map(artist => {
          return {
            value: artist._id,
            label: artist.Name,

          };
        }
        );

        setArtistList(artistList);
      }
      catch (error) {
        console.log(error);
      }
    }
    getArtists();
  }
    , []);

  return (
    <>
      <Container >
        {modalOpen && <AddArtistModal setModalOpen={setModalOpen} modalOpen={modalOpen} />}


        <>
          <Title>Adding a new Song</Title>
          <Wrapper>
            <FORM encType="multipart/form-data">

              <FIELD>
                <LEFT>
                  <LABEL>Song Name</LABEL>
                </LEFT>
                <CENTER>
                  <INPUT type="text" name="Name" placeholder="Song Name" onChange={handleChange} value={formData.Name} />
                </CENTER>
                <RIGHT>
                </RIGHT>
              </FIELD>

              <FIELD>
                <LEFT>
                  <LABEL>Date Released</LABEL>
                </LEFT>
                <CENTER>
                  <INPUT type="date" name="DateOfRelease" placeholder="DateOfRelease"
                    onChange={handleChange} value={formData.DateOfRelease} />

                </CENTER>
                <RIGHT>
                </RIGHT>
              </FIELD>

              <FIELD>
                <LEFT>
                  <LABEL > Artwork</LABEL>
                </LEFT>
                <CENTER>
                  <Imagelabel for="image" >
                    <ImageIcon style={{ fontSize: 22, paddingRight: 10 }}></ImageIcon>
                    <span style={{ color: "gray", fontWeight: "bolder" }}>Upload Image</span>
                    <INPUT type="file" name="Cover" id="image" style={{ display: "none" }} encType="multipart/form-data" onChange={handleImageChange}
                    />
                  </Imagelabel>
                </CENTER>
                <RIGHT>
                </RIGHT>
              </FIELD>


              <SELECTFILE>
                <LEFT>
                  <LABEL>Artist</LABEL>
                </LEFT>

                <CENTER >
                  <Select style={{ width: "100%" }}
                    options={ArtistList}
                    isMulti
                    showCheckbox={true}
                    name="Artist"
                    onChange={handleMultiChange}

                  />
                </CENTER>

                <RIGHT>
                  <Link to="/addArtistModal"><BUTTON

                    onClick={
                      (e) => {
                        e.preventDefault();
                        setModalOpen(true)
                      }
                    }

                  ><AddIcon style={{ fontSize: 16, paddingRight: 4 }} />Add Artists</BUTTON>
                  </Link>
                </RIGHT>

              </SELECTFILE>



              <BUTTONFILED>
                <BUTTON>Cancel</BUTTON>
                <BUTTON onClick={handleSubmit}>Save</BUTTON>
              </BUTTONFILED>

            </FORM>
          </Wrapper>


        </>
      </Container>
    </>
  );
}

export default AddingSong;
