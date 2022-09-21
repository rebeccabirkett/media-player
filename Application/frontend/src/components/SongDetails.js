const SongDetails = ({ song }) => {
  return (
    <div className="song-details">
      {song.image}
      <p>{song.title}</p>
      <p>{song.artist}</p>
      <p>{song.album}</p>
    </div>
  );
};

export default SongDetails;
