export default function Profile() {
    return (
        <div className="container mt-5 mb-5 p-4 d-flex justify-content-center" style={{ color: "#F7F5F2", backgroundColor: "#F7F5F2", }}>
            <div className="card p-7" style={{ backgroundColor: "#8D8DAA", }}>
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary" style={{
                        margin: '30px',
                        boxSizing: 'content-box',
                        width: '120px',
                        height: '120px',
                        color: '#8D8DAA',
                        borderRadius: '30px',
                        backgroundColor: '#F7F5F2',
                        borderColor: '#F7F5F2'
                    }}>
                        <img src="https://c4.wallpaperflare.com/wallpaper/966/951/802/digital-digital-art-artwork-illustration-fantasy-art-hd-wallpaper-preview.jpg" style={{

                            boxSizing: 'content-box',
                            width: '120px',
                            height: '120px',
                            color: '#8D8DAA',
                            borderRadius: '30px',
                            backgroundColor: '#F7F5F2',
                            borderColor: '#F7F5F2'
                        }} height="100" width="100" />
                    </button> <span className="name mt-3">Eleanor Pena</span>

                    <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span className="number">1069 <span className="follow">Followers</span></span> </div>
                    <div className=" d-flex mt-2"> <button className="btn1 btn-dark" style={{
                        margin: '30px',
                        boxSizing: 'content-box',
                        width: '80px',
                        color: '#8D8DAA',
                        borderRadius: '30px',
                        backgroundColor: '#F7F5F2',
                        borderColor: '#F7F5F2'
                    }}>Edit Profile</button> </div>
                    <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div>
                    <div className=" px-2 rounded mt-4 date ">
                        lorem ipsum dolor sit amet lorem ipsum it amet lorem ipsum
                        <br />

                        lorem ipsum dolor sit amet lorem ipsum it amet lorem ipsum
                        <br />
                        lorem ipsum dolor sit amet lorem ipsum it amet lorem ipsum
                        <br />

                        lorem ipsum dolor sit amet lorem ipsum it amet lorem ipsum
                        <br />

                        lorem ipsum dolor sit amet lorem ipsum it amet lorem ipsum
                        <br />

                        dolor sit amet lorem ipsum dolor sit amet</div>
                </div>
            </div>
        </div>
    );
}