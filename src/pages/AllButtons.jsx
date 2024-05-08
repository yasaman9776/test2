import {

    MainLargeButton,
    MainMediumButton,
    MainSmallButton,
    MainIconButton
} from "../components/Button";

import SaveIcon from "../assets/icon/SaveIcon";
const AllButtons = ({props}) => {

    return ( 
    <> <div style={{
        padding: 50
    }}>

        <div
            style={{
            display: 'flex',
            marginBottom: 50
        }}>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                margin: "10px 50px"
            }}>
                <span
                    style={{
                    fontFamily: 'IRANYekanBold',
                    color: "#000",
                    marginBottom: 10
                }}>
                    Large Button
                </span>
                <MainLargeButton radius={""}>
                    کلیک کنید !
                </MainLargeButton>
            </div>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                margin: "10px 50px"
            }}>
                <span
                    style={{
                    fontFamily: 'IRANYekanBold',
                    color: "#000",
                    marginBottom: 10
                }}>
                    Secondary Button
                </span>
                <MainLargeButton backgroundColor={"secondary"} textColor={"secondary"} borderColor={"secondary"}>
                    کلیک کنید !
                </MainLargeButton>
            </div>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                margin: "10px 50px"
            }}>
                <span
                    style={{
                    fontFamily: 'IRANYekanBold',
                    color: "#000",
                    marginBottom: 10
                }}>
                    Medium Button
                </span>
                <MainMediumButton>
                    کلیک کنید !
                </MainMediumButton>
            </div>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                margin: "10px 50px"
            }}>
                <span
                    style={{
                    fontFamily: 'IRANYekanBold',
                    color: "#000",
                    marginBottom: 10
                }}>
                    Small Button
                </span>
                <MainSmallButton>
                    کلیک کنید !
                </MainSmallButton>
            </div>
        </div>
        <div
            style={{
            display: 'flex',
            marginBottom: 50
        }}>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                margin: "10px 50px"
            }}>
                <span
                    style={{
                    fontFamily: 'IRANYekanBold',
                    color: "#000",
                    marginBottom: 10
                }}>
                    Large Button
                </span>
                <MainIconButton>
                    کلیک کنید !
                    <SaveIcon
                        height={15}
                        width={15}
                        color={'#fff'}
                        style={{
                        marginLeft: 10
                    }}/>

                </MainIconButton>
            </div>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                margin: "10px 50px"
            }}>
                <span
                    style={{
                    fontFamily: 'IRANYekanBold',
                    color: "#000",
                    marginBottom: 10
                }}>
                    Medium Button
                </span>
                <MainMediumButton>
                    کلیک کنید !
                    <SaveIcon
                        height={15}
                        width={15}
                        color={'#fff'}
                        style={{
                        marginLeft: 10
                    }}/>
                </MainMediumButton>
            </div>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                margin: "10px 50px"
            }}>
                <span
                    style={{
                    fontFamily: 'IRANYekanBold',
                    color: "#000",
                    marginBottom: 10
                }}>
                    Small Button
                </span>
                <MainSmallButton>
                    کلیک کنید !
                    <SaveIcon
                        height={15}
                        width={15}
                        color={'#fff'}
                        style={{
                        marginLeft: 10
                    }}/>
                </MainSmallButton>
            </div>
        </div>
        <div
            style={{
            display: 'flex',
            marginBottom: 50
        }}>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                margin: "10px 50px"
            }}>
                <span
                    style={{
                    fontFamily: 'IRANYekanBold',
                    color: "#000",
                    marginBottom: 10
                }}>
                    Danger Button
                </span>
                <MainLargeButton backgroundColor={"danger"}>
                    کلیک کنید !
                  

                </MainLargeButton>
            </div>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                margin: "10px 50px"
            }}>
                <span
                    style={{
                    fontFamily: 'IRANYekanBold',
                    color: "#000",
                    marginBottom: 10
                }}>
                    Alert Button
                </span>
                <MainLargeButton backgroundColor={"alert"}>
                    کلیک کنید !
                </MainLargeButton>
            </div>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                margin: "10px 50px"
            }}>
                <span
                    style={{
                    fontFamily: 'IRANYekanBold',
                    color: "#000",
                    marginBottom: 10
                }}>
                    Accept Button
                </span>
                <MainLargeButton backgroundColor={"accept"}>
                    کلیک کنید !
                </MainLargeButton>
            </div>
        </div>
    </div> </>
    )
}

export default AllButtons;