import './Downloads.css';

function Downloads(props) {
    return (
        <div className="downloads" id="downloads">
            <div>
                <h1 className="downloads-callout">Available (Almost) Everywhere.</h1>
                <span className="downloads-action">Tap on your platform and give it a whirl!</span>
            </div>
            <div className="downloads-paddingbox">
                <span className="downloads-label">On your computer...</span>
                <br />
                <a className="downloads-button" href="https://drive.google.com/uc?export=download&id=1a7OpQcpqU1uIChAbe_-BfzfsqdKYz1AL"><i class="fab fa-apple" /> macOS</a>
                <a className="downloads-button" href="https://drive.google.com/uc?export=download&id=1jAfmFoAuHjuaDNTBp-H3WGxLpO2uLhee"><i class="fab fa-windows" /> Windows</a>
                <a className="downloads-button" href="https://drive.google.com/uc?export=download&id=15N4ngHeG4s01BnPAhz6JsGlFewGP-g_R"><i class="fab fa-linux" /> Linux</a>
                <a className="downloads-button" href="https://beta.condution.com"><i class="fas fa-globe" /> Web</a>
            </div>
            <div className="downloads-paddingbox">
                <span className="downloads-label">or in your phone!</span>
                <br />
                <a className="downloads-button" href="https://testflight.apple.com/join/BPsiQBKV"><i class="fab fa-apple" /> iOS</a>
                <a className="downloads-button" href="https://play.google.com/store/apps/details?id=cf.shabang.condution"><i class="fab fa-android" /> Android</a>
            </div>
            <div className="downloads-paddingbox hash" style={{display: "inline-block"}}>
                <div className="downloads-hashbox">
                    <div className="downloads-filename">Condution_beta-v1.0.0_darwin <div className="downloads-hash">968d4f95d46f3fa36a1452592f9da2d5221bca4e5884def15081893e55c625f2</div></div>
                    <div className="downloads-filename">Condution_beta-v1.0.0_win64 <div className="downloads-hash">a8f64ff4870654651f58a203396bd77777eb5d1c1aeb313dcf0d96dc5b8e560f</div></div>
                    <div className="downloads-filename">Condution_beta-v1.0.0_AppImage <div className="downloads-hash">251299b1ef13b8b5e8a5a234e5b101cff0513622c75cbe5b4dd3e38a3906e7a2</div></div>
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                <ul class="icons">
                    <li><a href="https://twitter.com/Condution" class="fab fa-twitter"></a></li>
                    <li><a href="https://patreon.com/condution" class="fab fa-patreon"></a></li>
                    <li><a href="mailto:support@shabang.cf" class="fas fa-envelope"></a></li>
                    <li><a href="https://github.com/Shabang-Systems/Condution" class="fab brands fa-github"></a></li>
                    <li><a href="https://www.youtube.com/channel/UCHoAJexhqGJwIEOD3RELBlw" class="fab fa-youtube"></a></li>
                    <li><a href="https://discord.gg/UaaqueY" class="fab fa-discord"></a></li>
                </ul>
            </div>
            <div style={{textAlign: "center", color: "white", fontSize: 12}}>
                ©2019-2020 Shabang Systems, LLC. Read up on our <a href="https://www.condution.com/terms.html" className="tos-link">Terms of Service</a> and <a href="https://www.condution.com/privacy.html" className="tos-link">Privacy Policy</a>. Built with ♥️ and 🥗 in the SFBA.
            </div>
        </div>
    )
}

export default Downloads;

