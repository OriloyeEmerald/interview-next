
export default function Home() {
  return (
    <main className="App">
      <div>
        <h3>We've Missed You</h3>
        <p>Kindly sign in and get first access to the very best community and unlock more opportunities</p>
        <form>
          <div><input type="text"/></div>
          <br />
          <div><input type="password"/></div>
          <button>Login</button>
        </form>
        <p>Forgot username or password?</p>
        <p>Don't have an account? <span><a href="#">Sign up</a></span></p>
      </div>
    </main>
  )
}
