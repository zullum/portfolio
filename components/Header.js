import { BubbleChat } from 'flowise-embed-react';

const Header = () => {
  return (
    <header className="absolute z-30 w-full">
      <BubbleChat
        chatflowid="050de8c0-ee9c-48ba-9372-2def283489c3"
        apiHost="http://16.170.241.71"
        theme={{
          button: {
            backgroundColor: '#3B81F6',
            right: 20,
            bottom: 20,
            size: 'medium',
            iconColor: 'white',
            customIconSrc:
              'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
          },
          chatWindow: {
            welcomeMessage: 'Hello! This is custom welcome message',
            backgroundColor: '#ffffff',
            height: 700,
            width: 400,
            fontSize: 16,
            poweredByTextColor: '#303235',
            botMessage: {
              backgroundColor: '#f7f8ff',
              textColor: '#303235',
              showAvatar: true,
              avatarSrc:
                'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png',
            },
            userMessage: {
              backgroundColor: '#3B81F6',
              textColor: '#ffffff',
              showAvatar: true,
              avatarSrc:
                'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png',
            },
            textInput: {
              placeholder: 'Type your question',
              backgroundColor: '#ffffff',
              textColor: '#303235',
              sendButtonColor: '#3B81F6',
            },
          },
        }}
      />
    </header>
  );
};

export default Header;
