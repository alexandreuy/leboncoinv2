function Login() {
    return (
        <div class="login-container animated fadeInDown bootstrap snippets bootdeys">
        <div class="loginbox bg-white">
            <div class="loginbox-title">SIGN IN</div>
            <div class="loginbox-textbox">
                <input type="text" class="form-control" placeholder="Email"/>
            </div>
            <div class="loginbox-textbox">
                <input type="text" class="form-control" placeholder="Password"/>
            </div>
            <div class="loginbox-forgot">
                <a href="">Forgot Password?</a>
            </div>
            <div class="loginbox-submit">
                <input type="button" class="btn btn-primary btn-block" value="Login"/>
            </div>
            <div class="loginbox-signup">
                <a href="/signup">Sign Up With Email</a>
            </div>
        </div>
        <div class="logobox">
        </div>
    </div>



    )
}

export default Login