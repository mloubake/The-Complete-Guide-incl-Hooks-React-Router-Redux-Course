import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

interface IProps {
  meetupData: {
    image: string;
    title: string;
    description: string;
    address: string;
  };
}

const MeetupDetails: React.FC<IProps> = ({ meetupData }) => {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        description={meetupData.description}
        address={meetupData.address}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://mloubake:vfkJaLRM7wHCniZA@cluster0.lqj3xzz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const database = client.db();

  const meetupsCollection = database.collection("meetups");

  //@ts-nocheck
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: Object.values(meetups).map((meetup) => {
      return {
        params: { meetupId: meetup._id.toString() },
      };
    }),
  };
}

export async function getStaticProps(context: any) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  //This will not run in browser because this function runs in BUILD process. To visualize, see terminal
  const client = await MongoClient.connect(
    "mongodb+srv://mloubake:vfkJaLRM7wHCniZA@cluster0.lqj3xzz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const database = client.db();

  const meetupsCollection = database.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup?._id.toString(),
        title: selectedMeetup?.title,
        image: selectedMeetup?.image,
        address: selectedMeetup?.address,
        description: selectedMeetup?.description,
      },
    },
  };
}

export default MeetupDetails;
