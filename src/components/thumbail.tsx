import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { Movie } from "../../typings";
import { modalState, movieState } from "../recoils_atoms/modalAtom";
import { DocumentData } from "@firebase/firestore";

interface props {
  movie: Movie | DocumentData;
}

export function Thumbnail({ movie }: props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      onClick={() => {
        setShowModal(true);
        setCurrentMovie(movie);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt=""
      />
    </div>
  );
}
