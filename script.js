function register() {
    const phone = '6283144027784';  // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya ingin mendaftar turnamen Cristall PvP Minecraft. Biaya pendaftaran: Rp7.000.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}
