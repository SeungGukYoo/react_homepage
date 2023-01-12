function BannelMain() {
  return (
    <section className='bannel_main scrollContent'>
      <div className='inner'>
        <video autoPlay muted loop>
          <source src={`${process.env.PUBLIC_URL}/videos/main_video.mp4`} />
        </video>
        <h1>An untraditional hotel</h1>
      </div>
    </section>
  );
}

export default BannelMain;
