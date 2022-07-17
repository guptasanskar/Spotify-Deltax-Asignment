import React from 'react';
import { Title } from '../style/Footer_Styled';
import { Button,Container, Wrapper, Table, TableHead, TableRow, TableCell, TableBody,Right } from "../style/Song_Styled";
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import { publicRequest } from '../api/requestMethod';
import { Link } from 'react-router-dom';
const Songs = ({user}) => {

    const [ArtistList, setArtistList] = useState([]);
    const [listOfSongs, setListOfSongs] = useState([]);

    useEffect(()=> {
        publicRequest.get("/artists/getAll").then(res => {
            setArtistList(res.data);
            
        }).catch(err => {
            console.log(err);
        }
        );
    }
    , []);

    
console.log(ArtistList);
   
  return (
    <>
       
        <Container>
        <Title>TOP 10 ARTIST</Title>
        <Right>
           {user.isAdmin?
           <>
            <Link to="/addArtist"><Button>
                <AddIcon style={{fontSize:16,paddingRight:4}}></AddIcon>
                Add Artist
            </Button>
            </Link>
           </>:
           <></>
           }
        </Right>
            <Wrapper>
             <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Artists Name</TableCell>
                        <TableCell>Date of birth</TableCell>
                        <TableCell>Songs</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        ArtistList.map(artist => {
                            return (
                                <TableRow key={artist._id}>
                                    <TableCell>{artist.Name}</TableCell>
                                    <TableCell>{artist.DOB}</TableCell>
                                    <TableCell>{artist.Songs.map((song,index)=>{
                                    return(
                                        <div key={index}>
                                            {song.Name}
                                        </div>
                                    )

                                }
                                )}
                                    </TableCell>
                                   
                                </TableRow>
                            )
                        }
                        )
                    }
                    </TableBody>
             </Table>

            </Wrapper>
        </Container>

    </>
  );
}








export default Songs;

