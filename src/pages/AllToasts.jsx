import {ErrorToast, WarningToast, SuccessToast, InfoToast} from "../components/Toasts";
const AllToasts = () => {

    return ( <> <div
        style={{
        padding: 50,
        display: 'flex',
        flexDirection: 'row-reverse'
    }}>
        <ErrorToast/>
        <WarningToast/>
        <SuccessToast/>
        <InfoToast/>

    </div> </>
    )
}

export default AllToasts;