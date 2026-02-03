import React, { useState } from 'react';
import Section from '../components/Section';
import { Phone, Mail, HelpCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const CENTERS = [
  {
    id: 'karolbagh',
    name: "Head Office (Karol Bagh)",
    tag: "Main Campus",
    address: "Plot No. 45-46, Near Rajendra Place Metro Station, Karol Bagh, New Delhi - 110005",
    phone: "+91-11-4733-8820",
    email: "admissions@verbelive.edu.in",
    color: "bg-gold"
  },
  {
    id: 'hauzkhas',
    name: "South Delhi (Hauz Khas)",
    tag: "South Campus",
    address: "Building A-12, Opposite Select Citywalk, Hauz Khas, New Delhi - 110016",
    phone: "+91-11-4989-7654",
    email: "hauzkhas@verbelive.edu.in",
    color: "bg-teal"
  },
  {
    id: 'rohini',
    name: "North Delhi (Rohini)",
    tag: "North Campus",
    address: "3rd Floor, Vertex Tower, Sector 7, Rohini, New Delhi - 110085",
    phone: "+91-11-4562-1234",
    email: "rohini@verbelive.edu.in",
    color: "bg-navy"
  }
];

export const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: '',
    stream: '',
    center: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900 animate-fade-in-up">
      {/* Header */}
      <div className="bg-navy-900 text-white py-12 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Contact & Admissions</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Take the first step towards academic excellence. Visit our centers or request a callback.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Modern Form (Shadcn-style) */}
          <div className="lg:col-span-5 lg:order-2">
            <div className="bg-white dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 shadow-xl overflow-hidden sticky top-24">
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy dark:text-white">Request a Call Back</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Fill out the form below and our academic counselors will reach out to you within 24 hours.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center animate-fade-in-up">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="text-lg font-bold text-green-800 dark:text-green-300 mb-1">Request Received!</h4>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      Thank you, {formData.name}. Our team will contact you shortly on {formData.phone}.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 text-sm font-medium text-green-700 dark:text-green-400 underline hover:text-green-800"
                    >
                      Submit another response
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
                        Student Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-slate-300 dark:border-navy-600 bg-white dark:bg-navy-900 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:focus:ring-gold disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all"
                        placeholder="Enter full name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          type="tel"
                          className="flex h-10 w-full rounded-md border border-slate-300 dark:border-navy-600 bg-white dark:bg-navy-900 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:focus:ring-gold disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
                          Email
                        </label>
                        <input 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          className="flex h-10 w-full rounded-md border border-slate-300 dark:border-navy-600 bg-white dark:bg-navy-900 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:focus:ring-gold disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all"
                          placeholder="student@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
                        Current Grade/Class <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-slate-300 dark:border-navy-600 bg-white dark:bg-navy-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:focus:ring-gold disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all"
                      >
                        <option value="" disabled>Select Class</option>
                        <option value="12">Class 12 (Appearing/Passed)</option>
                        <option value="11">Class 11 (Moving to 12)</option>
                        <option value="10">Class 10 (Moving to 11)</option>
                        <option value="9">Class 9 (Moving to 10)</option>
                        <option value="8">Class 8 (Moving to 9)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
                        Interested Stream <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="stream"
                        value={formData.stream}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-slate-300 dark:border-navy-600 bg-white dark:bg-navy-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:focus:ring-gold disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all"
                      >
                        <option value="" disabled>Select Course</option>
                        <option value="jee">Engineering (JEE Main & Advanced)</option>
                        <option value="neet">Medical (NEET / AIIMS)</option>
                        <option value="foundation">Foundation (Olympiads/NTSE)</option>
                        <option value="counseling" className="font-bold text-teal-600">✨ Not Sure? Book Free Counseling</option>
                      </select>
                      {formData.stream === 'counseling' && (
                        <div className="flex items-start gap-2 p-3 bg-teal-50 dark:bg-teal-900/20 text-teal-800 dark:text-teal-300 text-xs rounded-md">
                          <HelpCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <p>Great choice! Our academic experts will help you identify your strengths and choose the right path for your future.</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
                        Preferred Center <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="center"
                        value={formData.center}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-slate-300 dark:border-navy-600 bg-white dark:bg-navy-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:focus:ring-gold disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all"
                      >
                        <option value="" disabled>Select Location</option>
                        <option value="karolbagh">Head Office (Karol Bagh)</option>
                        <option value="hauzkhas">South Delhi (Hauz Khas)</option>
                        <option value="rohini">North Delhi (Rohini)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-navy text-white hover:bg-navy-800 dark:bg-gold dark:text-navy-900 dark:hover:bg-gold-400 h-11 px-8 shadow-md mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-slate-400 mt-4">
                      By submitting this form, you authorize Apex Institute to contact you via Call/SMS/WhatsApp.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Location Info */}
          <div className="lg:col-span-7 lg:order-1 space-y-8">
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-navy dark:text-white">Our Campuses</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Visit any of our centers for a personal consultation.</p>
              </div>
              
              <div className="grid gap-4">
                {CENTERS.map((center) => (
                  <div key={center.id} className="group bg-white dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 p-5 hover:border-navy/30 dark:hover:border-gold/50 transition-all hover:shadow-md flex flex-col sm:flex-row gap-4">
                     {/* Color Indicator */}
                     <div className={`hidden sm:block w-1 self-stretch rounded-full ${center.color} opacity-80`}></div>
                     
                     <div className="flex-1">
                       <div className="flex justify-between items-start mb-2">
                         <h3 className="font-bold text-lg text-navy dark:text-white group-hover:text-teal transition-colors">
                            {center.name}
                         </h3>
                         <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-100 dark:bg-navy-900 text-slate-500 rounded-md whitespace-nowrap">
                            {center.tag}
                         </span>
                       </div>
                       
                       <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                         {center.address}
                       </p>

                       <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                         <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                           <Phone className="w-4 h-4 text-teal" />
                           <span>{center.phone}</span>
                         </div>
                         <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                           <Mail className="w-4 h-4 text-teal" />
                           <span className="truncate">{center.email}</span>
                         </div>
                       </div>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Process Snippet (Simplified) */}
            <div className="border-t border-slate-200 dark:border-navy-700 pt-8">
               <h4 className="font-bold text-navy dark:text-white mb-4 flex items-center gap-2 text-lg">
                 <AlertCircle className="w-5 h-5 text-gold" /> Quick Admission Guide
               </h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 {[
                   { step: 1, text: "Fill Enquiry Form" },
                   { step: 2, text: "Take ASAT Test" },
                   { step: 3, text: "Counseling" },
                   { step: 4, text: "Join Batch" }
                 ].map((item) => (
                   <div key={item.step} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-navy-900/50 border border-slate-100 dark:border-navy-700">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-600 flex items-center justify-center text-xs font-bold text-navy dark:text-gold shrink-0">
                        {item.step}
                      </div>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{item.text}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export const Fees: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900 animate-fade-in-up">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">Fee Structure</h1>
          <p className="text-slate-600 dark:text-slate-300">Transparent pricing for all our classroom programs.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-navy-800 rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-navy dark:bg-navy-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Course Name</th>
                <th className="px-6 py-4 text-left">Class</th>
                <th className="px-6 py-4 text-left">Duration</th>
                <th className="px-6 py-4 text-right">Annual Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-navy-700">
              {[
                { name: "Shikhar (JEE)", class: "11th", duration: "2 Years", fee: "₹ 1,45,000" },
                { name: "Samarth (JEE)", class: "12th", duration: "1 Year", fee: "₹ 1,55,000" },
                { name: "Sanjeevani (NEET)", class: "11th", duration: "2 Years", fee: "₹ 1,45,000" },
                { name: "Lakshya (NEET)", class: "12th", duration: "1 Year", fee: "₹ 1,55,000" },
                { name: "Neev (Foundation)", class: "9th/10th", duration: "1 Year", fee: "₹ 85,000" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-navy-700/50">
                  <td className="px-6 py-4 font-medium text-navy dark:text-white">{row.name}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{row.class}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{row.duration}</td>
                  <td className="px-6 py-4 text-right font-bold text-teal">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 p-4 bg-gold/10 border border-gold/30 rounded-lg text-slate-700 dark:text-slate-300 text-sm">
          <strong>Note:</strong> Fees include study material, uniform, and test series. Scholarship discounts applicable based on ASAT score.
        </div>
      </Section>
    </div>
  );
};