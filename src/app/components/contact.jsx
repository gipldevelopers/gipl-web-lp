"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, Phone, MessageSquare, RefreshCw, ShieldCheck } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';

import { useRouter } from 'next/navigation';

export default function ContactUs() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        description: ''
    });
    const [captcha, setCaptcha] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const canvasRef = useRef(null);

    const generateCaptcha = () => {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randomString = "";
        for (let i = 0; i < 6; i++) {
            randomString += chars[Math.floor(Math.random() * chars.length)];
        }
        setCaptcha(randomString);
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    useEffect(() => {
        if (captcha && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Background
            ctx.fillStyle = '#F3F4F6';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add noise (lines)
            for (let i = 0; i < 7; i++) {
                ctx.beginPath();
                ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
                ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
                ctx.strokeStyle = `rgba(0,0,0,${0.1 + Math.random() * 0.2})`;
                ctx.lineWidth = 1 + Math.random();
                ctx.stroke();
            }

            // Draw text
            ctx.font = 'bold 24px Courier New';
            ctx.fillStyle = '#374151';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';

            // Draw each character with slight rotation/offset
            const charWidth = canvas.width / 6;
            for (let i = 0; i < 6; i++) {
                ctx.save();
                const x = (i * charWidth) + (charWidth / 2);
                const y = canvas.height / 2;
                ctx.translate(x, y);
                ctx.rotate((Math.random() - 0.5) * 0.4);
                ctx.fillText(captcha[i], 0, 0);
                ctx.restore();
            }
        }
    }, [captcha]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handlePhoneChange = (value, country, e, formattedValue) => {
        setFormData(prev => ({ ...prev, contactNumber: value }));
        if (errors.contactNumber) {
            setErrors(prev => ({ ...prev, contactNumber: null }));
        }
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';

        const phoneToValidate = formData.contactNumber.startsWith('+')
            ? formData.contactNumber
            : '+' + formData.contactNumber;

        if (!formData.contactNumber) {
            newErrors.contactNumber = 'Phone number is required';
        } else if (!isValidPhoneNumber(phoneToValidate)) {
            newErrors.contactNumber = 'Invalid phone number';
        }

        if (!captchaInput.trim()) {
            newErrors.captcha = 'Please enter the captcha code';
        } else if (captchaInput.trim().toUpperCase() !== captcha) {
            newErrors.captcha = 'Incorrect captcha code';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            try {
                const response = await fetch('https://gipl-site.gohilinfotech.com/api/lp-contact.php?token=GIPL2025SecureKey', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: '+' + formData.contactNumber,
                        description: formData.description
                    }),
                });

                const result = await response.json();

                if (result.status === 'success') {
                    console.log('Form submitted successfully:', result);
                    setFormData({ name: '', email: '', contactNumber: '', description: '' });
                    setCaptchaInput("");
                    generateCaptcha();
                    setErrors({});
                    router.push('/thank-you');
                } else {
                    console.error('Submission failed:', result);
                    alert('Something went wrong. Please try again later.');
                    generateCaptcha();
                    setCaptchaInput("");
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Network error. Please try again later.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section id="contact-us" className="bg-white py-6 sm:py-8 lg:py-10">
            <div className="max-w-xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#F8F9FA] rounded-xl p-5 sm:p-6 border border-[#EAEAEA] shadow-sm"
                >
                    <div className="text-center mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50]" style={{ fontFamily: 'var(--font-rubik)' }}>
                            Get in Touch
                        </h2>
                        <p className="text-[#7A7A7A] text-xs sm:text-sm mt-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                            We'd love to hear from you.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">

                        {/* Full Name */}
                        <div>
                            <label className="block text-xs font-semibold text-[#546E7A] uppercase tracking-wide mb-1">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                    <User className={`h-4 w-4 transition-colors ${errors.name ? 'text-red-500' : 'text-[#B0BEC5] group-focus-within:text-[#27B0C4]'}`} />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full pl-9 pr-3 py-2 bg-white border rounded text-sm text-[#2C3E50] placeholder-[#CFD8DC] outline-none transition-all h-[38px] ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-[#27B0C4]'}`}
                                />
                            </div>
                            {errors.name && <p className="text-[10px] text-red-500 mt-0.5">{errors.name}</p>}
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className="block text-xs font-semibold text-[#546E7A] uppercase tracking-wide mb-1">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                    <Mail className={`h-4 w-4 transition-colors ${errors.email ? 'text-red-500' : 'text-[#B0BEC5] group-focus-within:text-[#27B0C4]'}`} />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full pl-9 pr-3 py-2 bg-white border rounded text-sm text-[#2C3E50] placeholder-[#CFD8DC] outline-none transition-all h-[38px] ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#27B0C4]'}`}
                                />
                            </div>
                            {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="block text-xs font-semibold text-[#546E7A] uppercase tracking-wide mb-1">
                                Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <div className="relative group phone-input-container">
                                <PhoneInput
                                    country={'in'}
                                    value={formData.contactNumber}
                                    onChange={handlePhoneChange}
                                    isValid={(value, country, countries, hiddenArea, inputNumber) => true}
                                    inputProps={{
                                        name: 'contactNumber',
                                        required: true,
                                        autoComplete: 'tel',
                                        className: `w-full !pl-[44px] pr-3 py-2 bg-white border rounded text-sm text-[#2C3E50] placeholder-[#CFD8DC] outline-none transition-all h-[38px] w-full ${errors.contactNumber ? 'border-red-500' : 'border-gray-200 focus:border-[#27B0C4]'}`
                                    }}
                                    buttonStyle={{
                                        border: '1px solid',
                                        borderColor: errors.contactNumber ? '#ef4444' : '#E5E7EB',
                                        borderRight: 'none',
                                        borderRadius: '4px 0 0 4px',
                                        backgroundColor: 'white',
                                        paddingLeft: '4px'
                                    }}
                                    containerStyle={{
                                        width: '100%',
                                        height: '38px'
                                    }}
                                    dropdownStyle={{
                                        width: '280px',
                                        borderRadius: '4px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                        border: '1px solid #E5E7EB',
                                    }}
                                />
                            </div>
                            {errors.contactNumber && <p className="text-[10px] text-red-500 mt-0.5">{errors.contactNumber}</p>}
                        </div>

                        {/* Description (Optional) */}
                        <div>
                            <label className="block text-xs font-semibold text-[#546E7A] uppercase tracking-wide mb-1">
                                Message <span className="text-[#90A4AE] font-normal lowercase"></span>
                            </label>
                            <div className="relative group">
                                <div className="absolute top-2.5 left-3 pointer-events-none z-10">
                                    <MessageSquare className="h-4 w-4 text-[#B0BEC5] group-focus-within:text-[#27B0C4] transition-colors" />
                                </div>
                                <textarea
                                    name="description"
                                    rows={2}
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded text-sm text-[#2C3E50] placeholder-[#CFD8DC] focus:border-[#27B0C4] outline-none transition-all resize-none min-h-[60px]"
                                />
                            </div>
                        </div>

                        {/* Captcha */}
                        <div>
                            <label className="block text-xs font-semibold text-[#546E7A] uppercase tracking-wide mb-1">
                                Security Code <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-white p-1 border border-gray-200 rounded">
                                    <canvas
                                        ref={canvasRef}
                                        width="140"
                                        height="38"
                                        className="rounded cursor-pointer"
                                        onClick={generateCaptcha}
                                        title="Click to refresh captcha"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={generateCaptcha}
                                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors text-gray-600"
                                    title="Refresh Captcha"
                                >
                                    <RefreshCw className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                    <ShieldCheck className={`h-4 w-4 transition-colors ${errors.captcha ? 'text-red-500' : 'text-[#B0BEC5] group-focus-within:text-[#27B0C4]'}`} />
                                </div>
                                <input
                                    type="text"
                                    value={captchaInput}
                                    onChange={(e) => {
                                        setCaptchaInput(e.target.value);
                                        if (errors.captcha) setErrors(prev => ({ ...prev, captcha: null }));
                                    }}
                                    placeholder="Enter security code"
                                    className={`w-full pl-9 pr-3 py-2 bg-white border rounded text-sm text-[#2C3E50] placeholder-[#CFD8DC] outline-none transition-all h-[38px] ${errors.captcha ? 'border-red-500' : 'border-gray-200 focus:border-[#27B0C4]'}`}
                                />
                            </div>
                            {errors.captcha && <p className="text-[10px] text-red-500 mt-0.5">{errors.captcha}</p>}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex justify-center items-center gap-2 py-2.5 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white rounded font-bold text-sm shadow hover:shadow-md transition-all duration-300 mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            style={{ fontFamily: 'var(--font-rubik)' }}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    Submit Request
                                </>
                            )}
                        </motion.button>

                    </form>
                </motion.div>
            </div>

            {/* Global CSS for Phone Input overrides */}
            <style jsx global>{`
        .react-tel-input .form-control {
          width: 100% !important;
          height: 38px !important;
          border-radius: 4px !important;
          padding-left: 44px !important;
          font-size: 0.875rem !important;
          background: white !important;
          color: #2C3E50 !important;
        }
        .react-tel-input .flag-dropdown {
          border-color: #E5E7EB;
          border-radius: 4px 0 0 4px !important;
          background-color: transparent !important;
        }
        .react-tel-input .selected-flag {
          width: 34px !important;
          padding: 0 0 0 6px !important;
        }
        .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
             background-color: #F3F4F6 !important;
        }
      `}</style>
        </section>
    );
}
