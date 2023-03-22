import { Head } from "next/document";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData: any) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Allow-Access-Control-Origin": "http://localhost:3000",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredMeetupData),
    });

    if (!response.ok) {
      alert("Something went wrong!");

      return;
    }

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add you own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
