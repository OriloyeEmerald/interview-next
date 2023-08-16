
export default function Home() {
  return (
    <main className="App">
      <div>
      <div>
        <h3>We've Missed You</h3>
        <br />
        <p>Kindly sign in and get first access to the very best community and unlock more opportunities</p>
        <br />
        <form>
          <div>
            <div>Email:</div>
            <input type="text"/></div>
          <br />
          <div>
            <div>Password:</div>
            <input type="password"/></div>
          <br />
          <button className="btn">Login</button>
        </form>
        <p>Forgot username or password?</p>
        <p>Don't have an account? <span><a href="#">Sign up</a></span></p>
      </div>

      
      </div>
    </main>
  )
}
