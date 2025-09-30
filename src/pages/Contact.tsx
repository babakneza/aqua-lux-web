import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Send, Instagram, Linkedin } from 'lucide-react';
import { WaveDivider } from '@/components/WaveDivider';

const Contact = () => {
  const { t, tObj } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: tObj({ fa: 'پیام ارسال شد', en: 'Message Sent' }),
      description: tObj({ 
        fa: 'پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.', 
        en: 'Your message has been sent successfully. We will contact you soon.' 
      }),
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gold-text">{t('contact')}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {tObj({ 
              fa: 'برای درخواست پیش‌فاکتور، مشاوره فنی یا هرگونه سوال، با ما در تماس باشید.', 
              en: 'Contact us for quotation requests, technical consultation, or any questions.' 
            })}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Office Location */}
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{tObj({ fa: 'آدرس دفتر', en: 'Office Address' })}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tObj({ 
                      fa: 'تهران، خیابان آزادی، برج میلاد، طبقه 10', 
                      en: 'Tehran, Azadi Street, Milad Tower, 10th Floor' 
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{tObj({ fa: 'تلفن', en: 'Phone' })}</h3>
                  <p className="text-sm text-muted-foreground">+98 21 1234 5678</p>
                  <p className="text-sm text-muted-foreground">+98 912 345 6789</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{tObj({ fa: 'ایمیل', en: 'Email' })}</h3>
                  <p className="text-sm text-muted-foreground">info@watermeter.com</p>
                  <p className="text-sm text-muted-foreground">sales@watermeter.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-semibold mb-4">{t('followUs')}</h3>
              <div className="flex space-x-3 space-x-reverse">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all hover-scale"
                >
                  <Linkedin className="w-6 h-6 text-accent" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all hover-scale"
                >
                  <Instagram className="w-6 h-6 text-accent" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all hover-scale"
                >
                  <Send className="w-6 h-6 text-accent" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('name')} *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('email')} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t('phone')}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('message')} *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50 border-border/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full magnetic-btn bg-gradient-gold"
              >
                {isSubmitting ? (
                  tObj({ fa: 'در حال ارسال...', en: 'Sending...' })
                ) : (
                  <>
                    {t('send')}
                    <Send className="w-5 h-5 ltr:ml-2 rtl:mr-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <WaveDivider className="mt-20" />
      
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="glass-panel rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8642732773146!2d51.337786315316495!3d35.70064248019084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0a77c777d7de00!2sMilad%20Tower!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
