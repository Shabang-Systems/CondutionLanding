import './Downloads.css';

function Downloads(props) {
    return (
        <div className="downloads">
            <div>
                <h1 className="downloads-callout">Available (Almost) Everywhere.</h1>
                <span className="downloads-action">Tap on your platform and give it a whirl!</span>
            </div>
            <div className="downloads-paddingbox">
                <span className="downloads-label">On your computer...</span>
                <br />
                <div className="downloads-button"><i class="fab fa-apple" /> macOS</div>
                <div className="downloads-button"><i class="fab fa-windows" /> Windows</div>
                <div className="downloads-button"><i class="fab fa-linux" /> Linux</div>
                <div className="downloads-button"><i class="fas fa-globe" /> Web</div>
            </div>
            <div className="downloads-paddingbox">
                <span className="downloads-label">or in your phone!</span>
                <br />
                <div className="downloads-button"><i class="fab fa-apple" /> iOS</div>
                <div className="downloads-button"><i class="fab fa-android" /> Android</div>
            </div>
            <div className="downloads-paddingbox hash">
                <div className="downloads-hashbox">
                    <div className="downloads-filename">Condution_beta-v1.0.0_win64 <div className="downloads-hash">30e547b527a2db57d20f81cde94c761c8f622f3d9adbdfb910f44b2baab2c44b</div></div>
                    <div className="downloads-filename">Condution_beta-v1.0.0_win64 <div className="downloads-hash">30e547b527a2db57d20f81cde94c761c8f622f3d9adbdfb910f44b2baab2c44b</div></div>
                </div>
                <div className="downloads-hashbox">
                    <div className="downloads-filename">Condution_beta-v1.0.0_win64 <div className="downloads-hash">30e547b527a2db57d20f81cde94c761c8f622f3d9adbdfb910f44b2baab2c44b</div></div>
                    <div className="downloads-filename">Condution_beta-v1.0.0_win64 <div className="downloads-hash">30e547b527a2db57d20f81cde94c761c8f622f3d9adbdfb910f44b2baab2c44b</div></div>
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
        </div>
    )
}

export default Downloads;

