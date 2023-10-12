import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <main className="flex mt-16 flex-col lg:max-w-3xl sm:max-w-2xl max-w-xl p-5">
      <h1 className="flex  gap-2">
        This is{" "}
        <div className="bg-gradient-to-tr from-info-500 via-primary-500 to-primary-600 text-transparent bg-clip-text text-4xl font-bold">
          <strong>SPEEQ</strong>
        </div>
      </h1>
      <section className="relative w-full aspect-[10/7] rounded-lg overflow-hidden">
        <Image
          src={"/app.png"}
          fill
          alt="SPEEQ Image"
          className="object-cover"
        />
      </section>
      <h3 className="mt-5">Introduction:</h3>
      <h5>
        {`  Welcome to Speeq, the revolutionary open-source application that
      translates your voice in real-time! Designed to integrate seamlessly
      with platforms like Discord, Zoom, and more, Speeq aims to break down
      language barriers and connect the world like never before.`}
      </h5>
      <h3>Powered by Advanced AI:</h3>
      <h5>
        {`At the core of Speeq is the innovative 'Meta Seamless AI' technology.
      Although still in development, this feature promises to provide the most
      accurate and natural-sounding translations. Currently, Speeq supports
      translations in 5 different languages, with the scope for further
      expansion. `}
      </h5>
      <h3>Contribute & Collaborate:</h3>
      <h5>
        {`  Speeq is still in its developmental phase, and we're enthusiastic about
      building a community around it. If you're a developer, linguist, or
      simply someone with great ideas, we encourage contributions to improve
      the app's capabilities and reach. Your insights and expertise can help
      shape the future of live voice translation.`}
      </h5>
      <h3>Current Limitations:</h3>
      <p>
        <strong>UX Challenge:</strong>
        {`     The user experience in its current form might be a tad challenging for
      the average user. Feedback and suggestions are highly appreciated as we
      seek to make the interface as intuitive as possible.`}
      </p>
      <p>
        <strong>Translation Delay:</strong>
        {`  Due to constraints with the free API, users may experience slight delays
      in the translation process. We're continually working on optimizing this
      for a smoother experience.`}
      </p>
      <p>
        <strong>{`'Seamless' Development:`}</strong>
        {`   The 'Meta Seamless AI' module is still under development, and as such,
      some features might not be fully functional or polished.`}
      </p>

      <h3>Join the Speeq Revolution:</h3>
      <h5>
        {`  With Speeq, the world becomes a smaller place. Imagine attending
      meetings, game nights, or seminars without language being an obstacle.
      The future of communication is here, and it's open-source. Help us
      realize this vision. Dive in, contribute, and let's make Speeq the voice
      of the global community!`}
      </h5>
    </main>
  );
};

export default Intro;
