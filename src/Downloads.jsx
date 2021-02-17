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
                <a className="downloads-button" href="https://github.com/Shabang-Systems/Condution/releases/download/v1.0.2/Condution-1.0.2.dmg"><i class="fab fa-apple" /> macOS</a>
                <a className="downloads-button" href="https://github.com/Shabang-Systems/Condution/releases/download/v1.0.2/Condution.Setup.1.0.2.exe.zip"><i class="fab fa-windows" /> Windows</a>
                <a className="downloads-button" href="https://github.com/Shabang-Systems/Condution/releases/download/v1.0.2/Condution-1.0.2.AppImage"><i class="fab fa-linux" /> Linux</a>
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
                    <div className="downloads-filename">Condution-v1.0.2_darwin <div className="downloads-hash">a90770eafdbf9230f9ee4618f1857dbd8d1907e98b9f0643027a573779c77ebe</div></div>
                    <div className="downloads-filename">Condution-v1.0.2_win64 <div className="downloads-hash">2a24aebccedd84342efe6118974d29f6b5657b6a6ec3d75f35ad1778b0e6acdb</div></div>
                    <div className="downloads-filename">Condution-v1.0.2_AppImage <div className="downloads-hash">f013180d1cb1d2612d527afee31baf7bdba9409f2a58ad46761e98fb096d93bb</div></div>
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

