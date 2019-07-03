require("dotenv").config();

const generateEmail = (id) => (`${process.env.EMAIL_USERNAME}+user${id}${process.env.EMAIL_DOMAIN}`);

export const mockMailingList = [
         {
           id: 1,
           email: generateEmail(1),
           selectedPlayers: [
             "Novak Djokovic",
             "Rafael Nadal",
             "Dominic Thiem"
           ],
           checkboxA: true,
           checkboxB: true,
           timeZoneLocationString: "America/Los_Angeles",
           timeZoneOffset: "-0700"
         },
         {
           id: 2,
           email: generateEmail(2),
           selectedPlayers: ["Stanislas Wawrinka"],
           checkboxA: false,
           checkboxB: false,
           timeZoneLocationString: "Asia/Taipei",
           timeZoneOffset: "+0800"
         }
         //   {
         //   id:,
         //   email:,
         //   selectedPlayers: [

         //   ],
         //   checkboxA:,
         //   checkboxB:,
         // },
         //   {
         //   id:,
         //   email:,
         //   selectedPlayers: [

         //   ],
         //   checkboxA:,
         //   checkboxB:,
         // },
         //   {
         //   id:,
         //   email:,
         //   selectedPlayers: [

         //   ],
         //   checkboxA:,
         //   checkboxB:,
         // },
         //   {
         //   id:,
         //   email:,
         //   selectedPlayers: [

         //   ],
         //   checkboxA:,
         //   checkboxB:,
         // },
       ];