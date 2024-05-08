// 'use client';
// import SendIcon from '@mui/icons-material/Send';
// import { Box, Button } from '@mui/material';
// import axios from 'axios';
// import React, { useState } from 'react';

// const ContactForm = ({ backgroundColor }: { backgroundColor: string }) => {
//   const ButtonColor = backgroundColor;
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await axios.post('/send-email', formData);
//       alert('Message sent successfully!');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message. Please try again later.');
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         paddingBottom: '20px',
//         marginBottom: '20px',
//         // maxWidth: '700px',
//         maxWidth: '100%',
//       }}
//     >
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={{
//             fontFamily: 'Itim',
//             fontSize: '18px',
//             width: '240px',
//             marginRight: '30px',
//             border: 'none',
//             borderBottom: '1px solid #000',
//             backgroundColor: '#f8f8f8',
//             paddingBottom: '10px',
//           }}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={{
//             fontSize: '18px',
//             width: '340px',
//             marginRight: '10px',
//             border: 'none',
//             borderBottom: '1px solid #000',
//             backgroundColor: '#f8f8f8',
//             fontFamily: 'Itim',
//             paddingBottom: '10px',
//           }}
//         />
//       </div>
//       <textarea
//         name="message"
//         placeholder="Message"
//         value={formData.message}
//         onChange={handleChange}
//         required
//         style={{
//           fontSize: '18px',
//           marginTop: '10px',
//           border: 'none',
//           borderBottom: '1px solid #000',
//           backgroundColor: '#f8f8f8',
//           fontFamily: 'Itim',
//           //width: '620px',
//           maxWidth: '100%',
//           height: '100px',
//         }}
//       ></textarea>
//       <Box display={'flex'} justifyContent={'center'} pt={8}>
//         <Button
//           style={{ backgroundColor: ButtonColor }}
//           variant="contained"
//           endIcon={<SendIcon />}
//           type="submit"
//         >
//           Send
//         </Button>
//       </Box>
//     </form>
//   );
// };

// export default ContactForm;
