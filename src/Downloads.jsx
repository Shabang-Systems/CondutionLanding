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
                <a className="downloads-button" href="https://github.com/Shabang-Systems/Condution/releases/download/v1.2.1/Condution-1.2.1.dmg"><i class="fab fa-apple" /> macOS</a>
                <a className="downloads-button" href="https://github.com/Shabang-Systems/Condution/releases/download/v1.2.1/Condution.Setup.1.2.1.exe.zip"><i class="fab fa-windows" /> Windows</a>
                <a className="downloads-button" href="https://github.com/Shabang-Systems/Condution/releases/download/v1.2.1/Condution-1.2.1.AppImage"><i class="fab fa-linux" /> Linux</a>
                <a className="downloads-button" href="https://app.condution.com"><i class="fas fa-globe" /> Web</a>
            </div>
            <div className="downloads-paddingbox">
                <span className="downloads-label">or on your phone!</span>
                <br />
                <a className="downloads-button" href="https://apps.apple.com/us/app/condution/id1523249900"><i class="fab fa-apple" /> iOS</a>
                <a className="downloads-button" href="https://play.google.com/store/apps/details?id=cf.shabang.condution"><i class="fab fa-android" /> Android</a>
            </div>
            <div className="downloads-paddingbox hash" style={{display: "inline-block"}}>
                <div className="downloads-hashbox">
                    <div className="downloads-filename">Condution-v1.2.1_darwin <div className="downloads-hash">3464f8f842eda86d5e0e9e96b6788908381df7068333c6ebeb234e3a683b8ffe</div></div>
                    <div className="downloads-filename">Condution-v1.2.1_win64 <div className="downloads-hash">241af55cd41cf10386d0c46ce19908017df16c263d300c0d87853162a86afbc2</div></div>
                    <div className="downloads-filename">Condution-v1.2.1_AppImage <div className="downloads-hash">ed1460dfe0ad2c7e4d75fc365e308c6b516c17c09ec1fd8eb8c16482fbf4d55c</div></div>
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                <ul class="icons">
                    <li><a href="https://twitter.com/Condution" class="fab fa-twitter"></a></li>
                    <li><a href="https://patreon.com/condution" class="fab fa-patreon"></a></li>
                    <li><a href="mailto:support@shabang.io" class="fas fa-envelope"></a></li>
                    <li><a href="https://github.com/Shabang-Systems/Condution" class="fab brands fa-github"></a></li>
                    <li><a href="https://www.youtube.com/channel/UCHoAJexhqGJwIEOD3RELBlw" class="fab fa-youtube"></a></li>
                    <li><a href="https://discord.gg/UaaqueY" class="fab fa-discord"></a></li>
                </ul>
            </div>
            <div style={{textAlign: "center", color: "white", fontSize: 16}}>
                Thanks to our <a href="https://www.patreon.com/condution" className="tos-link">Patreons</a> who make this possible: Greirson | cyberic | Villads 

            </div>
            <div style={{textAlign: "center", color: "white", fontSize: 12, marginTop: 10}}>
                Interested in joining out team? Get in contact on Discord! We are always looking for more talent.
                
            </div>
            <div style={{textAlign: "center", color: "white", fontSize: 12}}>
                ©2019-2021 Shabang Systems, LLC. Read up on our <a href="https://www.condution.com/terms.html" className="tos-link">Terms of Service</a> and <a href="https://www.condution.com/privacy.html" className="tos-link">Privacy Policy</a>. Built with ♥️ and <a href="./25627991.jpg">🥗</a> in the SFBA.
            </div>
        </div>
    )
}

export default Downloads;

