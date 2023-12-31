import React, { useState, useEffect } from "react";
const MusicPlayer = () => {
  const audioUrls = [];
  //플레이 리스트
  const [playlist, setPlaylist] = useState([
    "https://youtu.be/IJT51et7owQ?si=E4-1UVaQq_G2yy73",
    "제목2",
    "제목3",
  ]);
  //현재 재생중인 음악
  const [currentSong, setCurrentSong] = useState(0);
  // 음악 재생, 음악 일시정지 를 위한 상태
  const [isPlaying, setIsPlaying] = useState(false);
  //오디오 박스
  const [audio, setAudio] = useState(new Audio(audioUrls[currentSong]));

  useEffect(() => {
    // Audio 박스 객체를 초기화
    setAudio(new Audio(audioUrls[currentSong]));

    //재생중을 누를 경우 재생이 될 수 있도록 설정
    if (isPlaying) {
      audio.play();
    }

    // Audio 시작할 때 시간과 일시정지 설정
    return () => {
      audio.pause();
      setIsPlaying(false);
      audio.currentTime = 0;
    };
  }, [currentSong]);

  //재생버튼을 누를 때 재생이 될 수 있도록 설정
  const playSong = () => {
    setIsPlaying(true);
    audio.play();
    console.log("곡 재생 : ", playlist[currentSong]);
  };
  //일시정지 버튼
  const pauseSong = () => {
    setIsPlaying(false);
    audio.pause();
    console.log("일시정지");
  };
  //재생목록
  const displayPlayList = () => {
    console.log("재생목록 : ", playlist.join(","));
  };

  //다음곡 재생
  const playNextSong = () => {
    const nextSong = (currentSong + 1) % playlist.length;
    setCurrentSong(nextSong);
    setIsPlaying(true);
    console.log("다음 곡 재생", playlist[nextSong]);
  };
  return (
    <div>
      <h1>음악플레이어 ✧ ☆ ٩(`･ω･´)</h1>
      <p>현재 재생중 : {playlist[currentSong]}</p>
      <button onClick={playSong} disabled={isPlaying}>
        재생
      </button>
      <button onClick={pauseSong} disabled={!isPlaying}>
        일시정지
      </button>
      <button onClick={displayPlayList}>재생 목록 보기</button>
      <button onClick={playNextSong}>다음곡 재생</button>
    </div>
  );
};
export default MusicPlayer;
