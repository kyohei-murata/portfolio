'use client';
import { useCustomBreakpoints } from '@/hooks/view/useCustomBreakpoints';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const ContactForm = ({ backgroundColor }: { backgroundColor: string }) => {
  const ButtonColor = backgroundColor;
  const CustomBreakpoints = useCustomBreakpoints();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <form
        onSubmit={handleSubmit}
        style={{
          paddingBottom: '20px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            marginBottom: '20px',
            display: 'flex',
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              fontFamily: 'Itim',
              fontSize: CustomBreakpoints.matchesSmDown ? '14px' : '18px',
              width: CustomBreakpoints.matchesSmDown ? '50%' : '35%',
              marginRight: '20px',
              border: 'none',
              borderBottom: '1px solid #000',
              backgroundColor: '#f8f8f8',
              paddingBottom: '10px',
              outline: 'none',
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              fontSize: CustomBreakpoints.matchesSmDown ? '14px' : '18px',
              width: CustomBreakpoints.matchesSmDown ? '80%' : '58%',
              // width: '10%',
              border: 'none',
              borderBottom: '1px solid #000',
              marginTop: CustomBreakpoints.matchesSmDown ? '10px' : '',
              backgroundColor: '#f8f8f8',
              fontFamily: 'Itim',
              paddingBottom: '10px',
              outline: 'none',
            }}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            fontSize: CustomBreakpoints.matchesSmDown ? '14px' : '18px',
            marginTop: '10px',
            border: 'none',
            borderBottom: '1px solid #000',
            backgroundColor: '#f8f8f8',
            fontFamily: 'Itim',
            width: CustomBreakpoints.matchesSmDown ? '100%' : '100%',
            height: '100px',
            outline: 'none',
          }}
        ></textarea>
        <Box display={'flex'} justifyContent={'center'} pt={8}>
          <Button
            style={{ backgroundColor: ButtonColor }}
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
          >
            Send
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
