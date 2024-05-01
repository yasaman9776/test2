import {
    DefaultButton,
    ExtendedButton,
    LargeButton,
    MediumButton,
    SmallButton,
    IconButton
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
                <LargeButton color="primary" >
                    کلیک کنید !
                </LargeButton>
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
                <MediumButton>
                    کلیک کنید !
                </MediumButton>
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
                <SmallButton>
                    کلیک کنید !
                </SmallButton>
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
                <IconButton>
                    کلیک کنید !
                    <SaveIcon
                        height={15}
                        width={15}
                        color={'#fff'}
                        style={{
                        marginLeft: 10
                    }}/>

                </IconButton>
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
                <MediumButton>
                    کلیک کنید !
                </MediumButton>
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
                <SmallButton>
                    کلیک کنید !
                </SmallButton>
            </div>
        </div>
    </div> </>
    )
}

export default AllButtons;