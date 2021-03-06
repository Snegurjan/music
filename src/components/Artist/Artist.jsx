import React from "react";
import ArtistSimilar from "./ArtistItem/ArtistSimilar";
import ArtistInfo from "./ArtistItem/ArtistInfo";
import Albums from "../common/Albums/Albums";
import Tracks from "../common/Tracks/Tracks";
import Paginator from "../common/Paginator/Paginator";
import {Spinner} from "react-bootstrap";
import Error from "../common/Error/Error";

const Artist = (props) => {

    if (props.artistInfoIsLoading) return <Spinner className='spinner' animation="border"/>

    if (props.artistError) return <Error error={props.artistError} />

    return (
        <div className='artist-wrapper'>
            <ArtistInfo artistInfo={props.artistInfo}/>
            <Tracks trackList={props.artistTopTracks} title={'Популярные треки исполнителя'} />
            <>
                <Albums albumsList={props.artistTopAlbums} title={'Альбомы'} />
                <div className="d-flex justify-content-center pb-3">
                    <Paginator onPageChanged={props.onPageChanged} page={props.page}
                               totalResults={props.totalResults} pageSize={props.pageSize}/>
                </div>
            </>
            <ArtistSimilar artistSimilar={props.artistSimilar}/>
        </div>
    )

}

export default Artist;