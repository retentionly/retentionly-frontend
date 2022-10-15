import { useDispatch, useSelector } from "react-redux";
import EditBlock from "../../components/EditorBlock";
import { setGreeting, setSalutations, setSender, setUrl } from "../../features/master/masterSlice";

const EditingBlockRight = () => {
    const dispatch = useDispatch();

    const { master, user: userState } = useSelector((state) => state);
    const { greeting, salutations, sender, url } = master;

    const handleGreetings = (e) => {
        dispatch(setGreeting(e));
    }
    const handleSalutation = (e) => {
        dispatch(setSalutations(e));
    }
    const handleSender = (e) => {
        dispatch(setSender(e));
    }
    const handleUrl = (e) => {
        dispatch(setUrl(e));
    }

    return (
        <>

            <EditBlock
                textArea={true}
                title={"Greeting:"}
                text="Choose how you would like to great your donors."
                inputPlaceholder={`E.g. "Hello, Hi, Asalamu Alaykum, Dear, Hiya, etc.” `}
                mb="30px"
                onChange={handleGreetings}
                value={greeting}
            />

            <EditBlock
                title={"Salutations:"}
                text="Choose how you would like to sign off 
                your emails."
                inputPlaceholder={`E.g. "Best Regards, Best Wishes, Thank You” `}
                mb="30px"
                onChange={handleSalutation}
                value={salutations}
            />
            <EditBlock
                title={"Sender:"}
                text="Decide who the emails will be sent by. 
                Is it the Head of Fundraising or the CEO or the Trustee, etc? "
                inputPlaceholder={`E.g. "Jamal - CEO of The Breakfast Club”.  `}
                mb="30px"
                onChange={handleSender}
                value={sender}
            />
            <EditBlock
                title={"URL:"}
                text="Tell us where you want to send recipients so they can donate to your cause.
                "
                inputPlaceholder={`E.g. "www.thebreakfastclub.org.uk/donate”`}
                onChange={handleUrl}
                value={url}
            />
        </>
    )
}
export default EditingBlockRight