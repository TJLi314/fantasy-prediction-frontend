"use client";
import React from "react";
import { useForm } from "react-hook-form";

interface Players {
  team: string;
  quarterback: string;
  passCatchers: string[];
  runningBacks: string[];
}

interface Props {
  players: Players;
}

interface FormData {
  passingYards: string;
  passingCompletions: string;
  passingTouchdowns: string;
  receivers: {
    name: string;
    targetShare: string;
    receivingTouchdowns: string;
  }[];
  runningBacks: {
    name: string;
    rushingYards: string;
    rushingTouchdowns: string;
  }[];
}

const StatsForm = ({ players }: Props) => {
  const passCatchers = [...players.passCatchers, ...players.runningBacks];
  const runningBacks = [...players.runningBacks, players.quarterback];

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="p-5 text-2xl font-semibold">Passing Projections</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-5 flex gap-6 items-end">
          <h3 className="label text-xl font-bold text-black w-40 truncate">
            {players.quarterback}
          </h3>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-bold text-black">
                Total Passing Yards
              </span>
            </label>
            <input
              {...register("passingYards")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-40"
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-bold text-black">
                Total Completions
              </span>
            </label>
            <input
              {...register("passingCompletions")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-40"
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-bold text-black">
                Total Passing TDs
              </span>
            </label>
            <input
              {...register("passingTouchdowns")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-40"
            />
          </div>
        </div>
        {passCatchers.map((receiver, index) => (
          <div key={receiver} className="p-5 flex gap-6 items-end">
            <h3 className="w-40 text-xl font-bold text-black truncate">
              {receiver}
            </h3>

            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-bold text-black">
                  Target Share
                </span>
              </label>
              <input
                {...register(`receivers.${index}.targetShare`)}
                type="text"
                className="input input-bordered w-40"
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-bold text-black">
                  Receiving TDs
                </span>
              </label>
              <input
                {...register(`receivers.${index}.receivingTouchdowns`)}
                type="text"
                className="input input-bordered w-40"
              />
            </div>
            <input
              type="hidden"
              value={receiver}
              {...register(`receivers.${index}.name`)}
            />
          </div>
        ))}

        <h1 className="p-5 text-2xl font-semibold mt-5">Rushing Projections</h1>
        {runningBacks.map((runningBack, index) => (
          <div key={runningBack} className="p-5 flex gap-6 items-end">
            <h3 className="w-40 text-xl font-bold text-black truncate">
              {runningBack}
            </h3>

            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-bold text-black">
                  Rushing Yards
                </span>
              </label>
              <input
                {...register(`runningBacks.${index}.rushingYards`)}
                type="text"
                className="input input-bordered w-40"
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-bold text-black">
                  Rushing TDs
                </span>
              </label>
              <input
                {...register(`runningBacks.${index}.rushingTouchdowns`)}
                type="text"
                className="input input-bordered w-40"
              />
            </div>
            <input
              type="hidden"
              value={runningBack}
              {...register(`receivers.${index}.name`)}
            />
          </div>
        ))}
        <button className="btn btn-primary m-5" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default StatsForm;
