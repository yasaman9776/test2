import AllertIcon from "../assets/icon/Allert";
import {BadgeIcon, BadgeBubble} from "../components/Badge";
import {DefaultTypography} from "../components/Typography";
import {CokatexColors} from "../helper/colors";
import Avatar from "../assets/img/avatar.jpg";
const AllBadges = () => {

    return ( 
    <> <div
        style={{
        padding: 50,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: 'center'
    }}>
        <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
            ارور
        </DefaultTypography>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"8px"}
                        height={"8px"}
                        backgroundColor={`${CokatexColors.error}`}
                        borderWidth={"1px"}
                        right={"1px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"10px"}
                        height={"10px"}
                        backgroundColor={`${CokatexColors.error}`}
                        borderWidth={"1px"}
                        right={"-5px"}
                        top={"-5px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"8px"}
                        height={"8px"}
                        backgroundColor={`${CokatexColors.error}`}
                        borderWidth={"1px"}
                        left={"-10px"}
                        top={"-3px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"12px"}
                        height={"12px"}
                        backgroundColor={`${CokatexColors.error}`}
                        borderWidth={"1px"}
                        right={"-3px"}
                        top={"-5px"}
                        padding={"1px"}
                        borderRadius={"50%"}>
                                  <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"18px"}
                        height={"18px"}
                        backgroundColor={`${CokatexColors.error}`}
                        borderWidth={"1px"}
                        right={"-13px"}
                        top={"-13px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"14px"}
                        height={"14px"}
                        backgroundColor={`${CokatexColors.error}`}
                        borderWidth={"1px"}
                        left={"-18px"}
                        top={"-10px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"18px"}
                        height={"12px"}
                        backgroundColor={`${CokatexColors.error}`}
                        borderWidth={"1px"}
                        right={"-3px"}
                        top={"-5px"}
                        padding={"1px"}
                        borderRadius={"35px"}>
                                  <DefaultTypography textLevel={"h3-8"}>
                       999
                    </DefaultTypography>
                        </BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"18px"}
                        height={"18px"}
                        backgroundColor={`${CokatexColors.error}`}
                        borderWidth={"1px"}
                        right={"-13px"}
                        top={"-13px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"14px"}
                        height={"14px"}
                        backgroundColor={`${CokatexColors.error}`}
                        borderWidth={"1px"}
                        left={"-18px"}
                        top={"-10px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
    </div>
    <div
        style={{
        padding: 50,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: 'center'
    }}>
        <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
           هشدار
        </DefaultTypography>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"8px"}
                        height={"8px"}
                        backgroundColor={`${CokatexColors.alert}`}
                        borderWidth={"1px"}
                        right={"1px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"10px"}
                        height={"10px"}
                        backgroundColor={`${CokatexColors.alert}`}
                        borderWidth={"1px"}
                        right={"-5px"}
                        top={"-5px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"8px"}
                        height={"8px"}
                        backgroundColor={`${CokatexColors.alert}`}
                        borderWidth={"1px"}
                        left={"-10px"}
                        top={"-3px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"12px"}
                        height={"12px"}
                        backgroundColor={`${CokatexColors.alert}`}
                        borderWidth={"1px"}
                        right={"-3px"}
                        top={"-5px"}
                        padding={"1px"}
                        borderRadius={"50%"}>
                                  <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"18px"}
                        height={"18px"}
                        backgroundColor={`${CokatexColors.alert}`}
                        borderWidth={"1px"}
                        right={"-13px"}
                        top={"-13px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"14px"}
                        height={"14px"}
                        backgroundColor={`${CokatexColors.alert}`}
                        borderWidth={"1px"}
                        left={"-18px"}
                        top={"-10px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"12px"}
                        height={"12px"}
                        backgroundColor={`${CokatexColors.alert}`}
                        borderWidth={"1px"}
                        right={"-3px"}
                        top={"-5px"}
                        padding={"1px"}
                        borderRadius={"50%"}>
                                  <DefaultTypography textLevel={"h3-8"}>
                       999
                    </DefaultTypography>
                        </BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"18px"}
                        height={"18px"}
                        backgroundColor={`${CokatexColors.alert}`}
                        borderWidth={"1px"}
                        right={"-13px"}
                        top={"-13px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"14px"}
                        height={"14px"}
                        backgroundColor={`${CokatexColors.alert}`}
                        borderWidth={"1px"}
                        left={"-18px"}
                        top={"-10px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
    </div> 
    <div
        style={{
        padding: 50,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: 'center'
    }}>
        <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
          موفقیت 
        </DefaultTypography>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"8px"}
                        height={"8px"}
                        backgroundColor={`${CokatexColors.accept}`}
                        borderWidth={"1px"}
                        right={"1px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"10px"}
                        height={"10px"}
                        backgroundColor={`${CokatexColors.accept}`}
                        borderWidth={"1px"}
                        right={"-5px"}
                        top={"-5px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"8px"}
                        height={"8px"}
                        backgroundColor={`${CokatexColors.accept}`}
                        borderWidth={"1px"}
                        left={"-10px"}
                        top={"-3px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"12px"}
                        height={"12px"}
                        backgroundColor={`${CokatexColors.accept}`}
                        borderWidth={"1px"}
                        right={"-3px"}
                        top={"-5px"}
                        padding={"1px"}
                        borderRadius={"50%"}>
                                  <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"18px"}
                        height={"18px"}
                        backgroundColor={`${CokatexColors.accept}`}
                        borderWidth={"1px"}
                        right={"-13px"}
                        top={"-13px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"14px"}
                        height={"14px"}
                        backgroundColor={`${CokatexColors.accept}`}
                        borderWidth={"1px"}
                        left={"-18px"}
                        top={"-10px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"12px"}
                        height={"12px"}
                        backgroundColor={`${CokatexColors.accept}`}
                        borderWidth={"1px"}
                        right={"-3px"}
                        top={"-5px"}
                        padding={"1px"}
                        borderRadius={"50%"}>
                                  <DefaultTypography textLevel={"h3-8"}>
                       999
                    </DefaultTypography>
                        </BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"18px"}
                        height={"18px"}
                        backgroundColor={`${CokatexColors.accept}`}
                        borderWidth={"1px"}
                        right={"-13px"}
                        top={"-13px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"14px"}
                        height={"14px"}
                        backgroundColor={`${CokatexColors.accept}`}
                        borderWidth={"1px"}
                        left={"-18px"}
                        top={"-10px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
    </div> 
    <div
        style={{
        padding: 50,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: 'center'
    }}>
        <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
         عملیات
        </DefaultTypography>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"8px"}
                        height={"8px"}
                        backgroundColor={`${CokatexColors.navyBlue}`}
                        borderWidth={"1px"}
                        right={"1px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"10px"}
                        height={"10px"}
                        backgroundColor={`${CokatexColors.navyBlue}`}
                        borderWidth={"1px"}
                        right={"-5px"}
                        top={"-5px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"8px"}
                        height={"8px"}
                        backgroundColor={`${CokatexColors.navyBlue}`}
                        borderWidth={"1px"}
                        left={"-10px"}
                        top={"-3px"}
                        borderRadius={"50%"}></BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"12px"}
                        height={"12px"}
                        backgroundColor={`${CokatexColors.navyBlue}`}
                        borderWidth={"1px"}
                        right={"-3px"}
                        top={"-5px"}
                        padding={"1px"}
                        borderRadius={"50%"}>
                                  <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"18px"}
                        height={"18px"}
                        backgroundColor={`${CokatexColors.navyBlue}`}
                        borderWidth={"1px"}
                        right={"-13px"}
                        top={"-13px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"14px"}
                        height={"14px"}
                        backgroundColor={`${CokatexColors.navyBlue}`}
                        borderWidth={"1px"}
                        left={"-18px"}
                        top={"-10px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginRight: 100
        }}>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"12px"}
                        height={"12px"}
                        backgroundColor={`${CokatexColors.navyBlue}`}
                        borderWidth={"1px"}
                        right={"-3px"}
                        top={"-5px"}
                        padding={"1px"}
                        borderRadius={"50%"}>
                                  <DefaultTypography textLevel={"h3-8"}>
                       999
                    </DefaultTypography>
                        </BadgeBubble>
                    <AllertIcon color={"#000"} width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"18px"}
                        height={"18px"}
                        backgroundColor={`${CokatexColors.navyBlue}`}
                        borderWidth={"1px"}
                        right={"-13px"}
                        top={"-13px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <img src={Avatar} alt="" width={"32px"} height={"32px"}/>

                </BadgeIcon>
            </div>
            <div style={{
                margin: 20
            }}>
                <BadgeIcon>
                    <BadgeBubble
                        width={"14px"}
                        height={"14px"}
                        backgroundColor={`${CokatexColors.navyBlue}`}
                        borderWidth={"1px"}
                        left={"-18px"}
                        top={"-10px"}
                        borderRadius={"50%"}>
                              <DefaultTypography textLevel={"h3-8"}>
                        1
                    </DefaultTypography>
                        </BadgeBubble>
                    <DefaultTypography fontFamily={"IRANYekanBold"} fontSize={"20px"}>
                        ارور
                    </DefaultTypography>
                </BadgeIcon>
            </div>
        </div>
    </div> 
     </>
    )
}

export default AllBadges;