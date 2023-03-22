import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

interface IProps {
  meetups: [];
}

const HomePage: React.FC<IProps> = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

// export async function getServerSideProps(context) {
//   //fetch data from an API during DEPLOYMENT process or in each REQUEST

//   const request = context.request;
//   const response = context.response;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  //fetch data from an API during BUILD process

  const client = await MongoClient.connect(
    "mongodb+srv://mloubake:vfkJaLRM7wHCniZA@cluster0.lqj3xzz.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const database = client.db();

  const meetupsCollection = database.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: Object.values(meetups).map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          description: meetup.description,
        };
      }),
    },
    //Update data each X seconds
    revalidate: 1,
  };
}

export default HomePage;
