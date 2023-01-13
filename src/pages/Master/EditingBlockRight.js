import { useDispatch, useSelector } from "react-redux";
import EditBlock from "../../components/EditorBlock";
import { setMaster } from "../../features/templates/templatesSlice";

const EditingBlockRight = ({
    error,
    greetingError,
    salutationError,
    senderError,
    companyEmailError,
    companyNameError,
    urlError,
    handleGreetingError,
    handleCompanyNameError,
    handleCompanyEmailError,
    handleSalutationError,
    handleSenderError,
    handleUrlError
}) => {
    const dispatch = useDispatch();

    const { master } = useSelector((state) => state.templates);
    const { greeting,companyEmail, companyName, salutations, sender, url } = master;

    const handleGreetings = (e) => {
        handleGreetingError(e[0].children[0].text);
        dispatch(setMaster({
            ...master,
            greeting: e
        }));
    }

    const handleCompanyName = (e) => {
        handleCompanyNameError(e[0].children[0].text);
        dispatch(setMaster({
            ...master,
            companyName: e
        }));
    }

    const handleCompanyEmail = (e) => {
        handleCompanyEmailError(e[0].children[0].text);
        dispatch(setMaster({
            ...master,
            companyEmail: e
        }));
    }

    const handleSalutation = (e) => {
        handleSalutationError(e[0].children[0].text);
        dispatch(setMaster({
            ...master,
            salutations: e
        }));
    }

    const handleSender = (e) => {
        handleSenderError(e[0].children[0].text);
        dispatch(setMaster({
            ...master,
            sender: e
        }));
    }

    const handleUrl = (e) => {
        handleUrlError(e[0].children[0].text);
        dispatch(setMaster({
            ...master,
            url: e
        }));
    }

    return (
        <>

            {
                greeting &&
                <EditBlock
                    textarea={true}
                    title={"Greeting:"}
                    text="Choose how you would like to greet your donors."
                    inputPlaceholder={`E.g. "Hello, Hi, Asalamu Alaykum, Dear, Hiya, etc.” `}
                    mb="30px"
                    onChange={handleGreetings}
                    value={greeting}
                    required={error && greetingError}
                />
            }

            {
                salutations &&
                <EditBlock
                    title={"Salutations:"}
                    text="Choose how you would like to sign off 
                your emails."
                    inputPlaceholder={`E.g. "Best Regards, Best Wishes, Thank You” `}
                    mb="30px"
                    onChange={handleSalutation}
                    value={salutations}
                    required={error && salutationError}
                />
            }
            {
                sender &&
                <EditBlock
                    title={"Sender:"}
                    text="Decide who the emails will be sent by. 
                Is it the Head of Fundraising or the CEO or the Trustee, etc? "
                    inputPlaceholder={`E.g. "Jamal - CEO of The Breakfast Club”.  `}
                    mb="30px"
                    onChange={handleSender}
                    value={sender}
                    required={error && senderError}
                />
            }
            {
                companyName &&
                <EditBlock
                    title={"Company Name:"}
                    text="Write Your Company Name"
                    inputPlaceholder={`E.g. "The Breakfast Club”.`}
                    mb="30px"
                    onChange={handleCompanyName}
                    value={companyName}
                    required={error && companyNameError}
                />
            }
            {
                companyEmail &&
                <EditBlock
                    title={"Company Email:"}
                    text="Write Your Company Email Address"
                    inputPlaceholder={`E.g. "company@email.com”.  `}
                    mb="30px"
                    onChange={handleCompanyEmail}
                    value={companyEmail}
                    required={error && companyEmailError}
                />
            }
            {
                url &&
                <EditBlock
                    title={"URL:"}
                    text="Tell us where you want to send recipients so they can donate to your cause.
                "
                    inputPlaceholder={`E.g. "www.thebreakfastclub.org.uk/donate”`}
                    onChange={handleUrl}
                    value={url}
                    required={error && urlError}
                />
            }
        </>
    )
}
export default EditingBlockRight