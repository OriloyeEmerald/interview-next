
export default function Home() {
  return (
    <main className="App">
      <div className="intro">
        <h2>We've Missed You</h2>
        <br />
        <p className="signin-text">Kindly sign in and get first access to the very best, community and unlock more opportunities.</p>
        <br />
        <form>
          <div>
            <div className="p">Email:</div>
            <input type="text"/></div>
          <br />
          <div>
            <div className="p">Password:</div>
            <input type="password"/></div>
          <br />
          <button className="btn">Login</button>
        </form>
        <br />
        <p className="p">Forgot username or password?</p>
        <br />
        <p className="p">Don't have an account? <span><a href="#">Sign up</a></span></p>
      </div>
      
      <div>
        <img src="./newImg.jpg" alt="" />
        </div>
      
    </main>
  )
}
