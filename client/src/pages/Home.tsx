import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, Star, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Import images
import logoMark from "@assets/gigi_topia1_1772112316204.png";
import logoText from "@assets/gigi_topianew_1772112968712.png";
import clinicImg from "@/assets/clinic.jpg";
import dentistImg from "@/assets/dentist.jpg";

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate booking
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Reservasi Berhasil!",
        description: "Tim kami akan segera menghubungi Anda untuk konfirmasi.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={logoMark} alt="Gigitopia Logo" className="h-10 w-auto object-contain" />
            <img src={logoText} alt="Gigitopia" className="h-8 w-auto object-contain hidden sm:block" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('tentang')} className="hover:text-primary transition-colors">Tentang Kami</button>
            <button onClick={() => scrollToSection('layanan')} className="hover:text-primary transition-colors">Layanan</button>
            <button onClick={() => scrollToSection('ulasan')} className="hover:text-primary transition-colors">Ulasan</button>
            <button onClick={() => scrollToSection('lokasi')} className="hover:text-primary transition-colors">Lokasi</button>
          </nav>
          
          <Button 
            className="rounded-full px-6 shadow-sm hover:shadow-md transition-all"
            onClick={() => scrollToSection('booking')}
          >
            Buat Janji
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                  <Star className="w-4 h-4 fill-primary" /> Klinik Gigi Terpercaya di Madiun
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
                  Senyum Sehat, <br/>
                  <span className="text-primary">Gigi Kuat</span>, <br/>
                  Hidup Bahagia.
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Perawatan gigi profesional dengan teknologi modern dan dokter ahli yang ramah. Kami berkomitmen memberikan senyum terbaik untuk Anda dan keluarga.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-base h-14 px-8" onClick={() => scrollToSection('booking')}>
                    Booking Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src={clinicImg} alt="Klinik Gigitopia" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-in slide-in-from-bottom-8 duration-700">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Star className="w-6 h-6 fill-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">4.9/5</div>
                    <div className="text-xs text-muted-foreground">Dari 500+ Pasien</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tentang Kami */}
        <section id="tentang" className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[3/4] max-w-[450px] mx-auto lg:mr-auto">
                  <img src={dentistImg} alt="Dokter Gigitopia" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase">TENTANG KAMI</h2>
                <h3 className="text-3xl md:text-4xl font-bold">Perawatan Ramah yang Membuat Anda Nyaman</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Gigitopia hadir untuk mengubah persepsi tentang kunjungan ke dokter gigi. Dengan suasana yang hangat, estetik, dan menenangkan, kami menjamin pengalaman perawatan gigi Anda jauh dari kata menakutkan.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Peralatan Modern</h4>
                      <p className="text-sm text-muted-foreground">Teknologi terkini untuk hasil yang maksimal dan tanpa rasa sakit.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Dokter Ahli</h4>
                      <p className="text-sm text-muted-foreground">Ditangani oleh dokter gigi profesional, ramah, dan berpengalaman.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section id="layanan" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">LAYANAN KAMI</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Solusi Lengkap untuk Senyum Anda</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Pemeriksaan Rutin", desc: "Cek kesehatan gigi menyeluruh untuk mencegah masalah sejak dini.", icon: "🦷" },
                { title: "Pembersihan Karang Gigi", desc: "Scaling profesional untuk gigi bersih, sehat, dan nafas segar.", icon: "✨" },
                { title: "Kawat Gigi & Behel", desc: "Perawatan ortodonti untuk merapikan susunan gigi Anda.", icon: "😁" },
                { title: "Pemutihan Gigi", desc: "Bleaching aman untuk senyum putih mempesona seketika.", icon: "⭐" },
                { title: "Penambalan Estetik", desc: "Tambal gigi dengan bahan yang menyerupai warna asli gigi.", icon: "🔧" },
                { title: "Pencabutan Gigi", desc: "Prosedur ekstraksi yang aman dan minim rasa sakit.", icon: "🏥" },
              ].map((service, i) => (
                <Card key={i} className="bg-card border-none shadow-sm hover:shadow-md transition-shadow group">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ulasan */}
        <section id="ulasan" className="py-24 bg-primary/5">
          <div className="container mx-auto px-4">
             <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">TESTIMONI</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Apa Kata Pasien Kami?</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Budi Santoso", text: "Tempatnya sangat nyaman, bersih, dan dokternya ramah banget. Nggak kerasa sakit pas cabut gigi." },
                { name: "Siti Rahma", text: "Scaling di Gigitopia beneran bersih maksimal. Kliniknya estetik, jadi nggak takut ke dokter gigi lagi." },
                { name: "Andi Wijaya", text: "Pasang behel di sini harganya terjangkau dan hasilnya memuaskan. Pelayanannya top!" },
              ].map((review, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex text-secondary">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="italic text-muted-foreground">"{review.text}"</p>
                    <div className="font-bold pt-2">{review.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Praktek Drg. Jasmine Badjuber</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="overflow-hidden shadow-xl border-border/50">
              <div className="flex flex-col md:flex-row">
                <div className="bg-primary p-8 md:w-2/5 text-primary-foreground space-y-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold">Buat Janji Temu</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Isi formulir untuk menjadwalkan kunjungan Anda. Kami akan menghubungi untuk konfirmasi jam yang tersedia.
                  </p>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-secondary" />
                      <span className="text-sm">+62 812-3456-7890</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span className="text-sm">Senin - Sabtu: 09:00 - 20:00</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:w-3/5">
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nama Lengkap</label>
                      <Input required placeholder="Masukkan nama Anda" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nomor WhatsApp</label>
                      <Input required type="tel" placeholder="08..." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Tanggal</label>
                        <Input required type="date" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Layanan</label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="konsultasi">Konsultasi</SelectItem>
                            <SelectItem value="scaling">Pembersihan (Scaling)</SelectItem>
                            <SelectItem value="tambal">Tambal Gigi</SelectItem>
                            <SelectItem value="behel">Kawat Gigi</SelectItem>
                            <SelectItem value="lainnya">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Keluhan (Opsional)</label>
                      <Textarea placeholder="Ceritakan keluhan Anda..." className="resize-none" />
                    </div>
                    <Button type="submit" className="w-full h-12 mt-2" disabled={isSubmitting}>
                      {isSubmitting ? "Memproses..." : "Kirim Reservasi"}
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Lokasi & Map */}
        <section id="lokasi" className="border-t border-border bg-card">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3 space-y-6">
                <div className="flex items-center gap-3">
                  <img src={logoMark} alt="Logo" className="h-8 w-auto" />
                  <img src={logoText} alt="Gigitopia" className="h-6 w-auto" />
                </div>
                <p className="text-muted-foreground">
                  Klinik gigi modern dengan pelayanan prima dan fasilitas lengkap untuk kenyamanan Anda.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">Jl. Kalimantan No 11, Madiun, Jawa Timur, Indonesia</span>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">+62 812-3456-7890</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 h-[300px] md:h-auto rounded-2xl overflow-hidden shadow-inner relative">
                {/* Embed Google Maps with exact query "Jl. Kalimantan No 11 Madiun Indonesia" */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.6!2d111.52!3d-7.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zJl.%20Kalimantan%20No%2011%20Madiun%20Indonesia!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid&q=Jl.+Kalimantan+No+11+Madiun+Indonesia" 
                  className="absolute inset-0 w-full h-full border-0" 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                {/* Fallback overlay in case map embed is blocked (just a clean visual) */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/10"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-border text-center py-6 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gigitopia Dental Clinic. All rights reserved.
          </div>
        </section>
      </main>
    </div>
  );
}