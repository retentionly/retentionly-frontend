import { useDispatch, useSelector } from "react-redux";
import EditBlock from "../../components/EditorBlock";
import { setMaster } from "../../features/templates/templatesSlice";

const EditingBlockRight = () => {
    const dispatch = useDispatch();

    const { master } = useSelector((state) => state.templates);
    const { greeting, salutations, sender, url } = master;

    const handleGreetings = (e) => {
        dispatch(setMaster({
            ...master,
            greeting: e
        }));
    }
    const handleSalutation = (e) => {
        dispatch(setMaster({
            ...master,
            salutations: e
        }));
    }
    const handleSender = (e) => {
        dispatch(setMaster({
            ...master,
            sender: e
        }));
    }
    const handleUrl = (e) => {
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
                />
            }
        </>
    )
}
export default EditingBlockRight