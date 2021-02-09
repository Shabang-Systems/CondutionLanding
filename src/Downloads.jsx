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
                <a className="downloads-button" href="https://github.com/Shabang-Systems/Condution/releases/download/v1.0.1/Condution-1.0.1.dmg"><i class="fab fa-apple" /> macOS</a>
                <a className="downloads-button" href="https://github.com/Shabang-Systems/Condution/releases/download/v1.0.1/Condution.Setup.1.0.1.exe.zip"><i class="fab fa-windows" /> Windows</a>
                <a className="downloads-button" href="https://github.com/Shabang-Systems/Condution/releases/download/v1.0.1/Condution-1.0.1.AppImage"><i class="fab fa-linux" /> Linux</a>
                <a className="downloads-button" href="https://app.condution.com"><i class="fas fa-globe" /> Web</a>
            </div>
            <div className="downloads-paddingbox">
                <span className="downloads-label">or on your phone!</span>
                <br />
                <a className="downloads-button" href="https://apps.apple.com/us/app/condution/id1523249900"><i class="fab fa-apple" /> iOS</a>
                <a className="downloads-button" href="https://play.google.com/store/apps/details?id=cf.shabang.condution"><i class="fab fa-android" /> Android</a>
            </div>
            <div className="downloads-paddingbox hash" style={{display: "none"}}>
                <div className="downloads-hashbox">
                    <div className="downloads-filename">Condution_beta-v1.0.1_darwin <div className="downloads-hash">6b26b7b4472c3c4d0b9aeb991f4419c15eb1f45ffb38298707c58cab20a9ad92</div></div>
                    <div className="downloads-filename">Condution_beta-v1.0.0_win64 <div className="downloads-hash">031efef443357fc00cdb83db00b0e3221f3c57c98cd59c184fce33ae69d144aa</div></div>
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
            <div style={{textAlign: "center", color: "white", fontSize: 16}}>
                Thanks to our <a href="https://www.patreon.com/condution" className="tos-link">Patreons</a> who make this possible: Greirson | cyberic | Reidel Law Firm

            </div>
            <div style={{textAlign: "center", color: "white", fontSize: 12, marginTop: 10}}>
                Interested in joining out team? Get in contact on Discord! We are always looking for more talent.
                
            </div>
            <div style={{textAlign: "center", color: "white", fontSize: 12}}>
                ©2019-2020 Shabang Systems, LLC. Read up on our <a href="https://www.condution.com/terms.html" className="tos-link">Terms of Service</a> and <a href="https://www.condution.com/privacy.html" className="tos-link">Privacy Policy</a>. Built with ♥️ and 🥗 in the SFBA.
            </div>
        </div>
    )
}

export default Downloads;

