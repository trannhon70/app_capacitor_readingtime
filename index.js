// Example JSON data
const json = {
  lastMessageNewFormat: "What is Epic ?",
  messages: [
    {
      id: "sqR8Sz9gW21aUYKtUikq7qZ",
      type: "text",
      content: {
        richText: [
          {
            type: "p",
            children: [
              {
                text: "Hello It's ",
              },
              {
                bold: true,
                text: "Reading Time",
              },
              {
                text: ' :)The EPic focuses on "reading" rather than multi-reading, and if the book is too long, a single book will have two to three lessons. Instead of excluding listening time, it will offer more opportunities to speak, as it will allow students to learn what they read and do not know by themselves with the help of the teacher.Unlike the Raz-Kids reading program, the Epic online library ticket is not included in the Epic reading program, so if you want to use the Epic library outside of class, you must purchase it separately.For additional details, we would appreciate it if you could check the notice below.',
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                text: "",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                text: "Thank you.",
              },
              {
                url: "https://reading-time.co.kr/notice-post/epic",
                type: "a",
                target: "_blank",
                children: [
                  {
                    text: "https://reading-time.co.kr/notice-post/epic",
                  },
                ],
              },
              {
                text: "",
              },
            ],
          },
        ],
      },
    },
  ],
};
function convertMessagesToText(messages) {
  let textMessage = "";

  // Iterate through each message object
  messages.forEach((message) => {
    // Check if the message type is text
    if (message.type === "text") {
      // Iterate through each rich text block
      message.content.richText.forEach((block) => {
        // Check if the block type is paragraph
        if (block.type === "p") {
          // Iterate through each child element in the paragraph
          block.children.forEach((child) => {
            // Append text, bold text, or URL to the text message
            if (child.text) {
              textMessage += child.text;
            } else if (child.bold) {
              textMessage += `**${child.text}**`;
            } else if (child.url) {
              textMessage += `[${child.text}](${child.url})`;
            }
          });
        }
        // Add a newline after each paragraph
        textMessage += "\n";
      });
    }
  });

  return JSON.stringify(textMessage);
}

// Extract messages from the JSON
const messages = json.messages;

// Call the function to convert messages to text
const textMessages = convertMessagesToText(messages);

console.log(textMessages);
