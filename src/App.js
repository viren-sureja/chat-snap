import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';

const App = () => {
	if (!localStorage.getItem('username')) return <LoginForm />;

	return (
		<ChatEngine
			height="100vh"
			projectID="e040f346-b70a-4c12-bea8-0a86eff8e08e"
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			// userName="shiva"
			// userSecret="fromkailash"
			// userName="nolan"
			// userSecret="123123"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
