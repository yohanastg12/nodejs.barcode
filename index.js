import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

async function generateQRCode() {
    // Prompt pengguna untuk memasukkan URL
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'url',
        message: 'Masukkan URL:',
      },
    ]);
  
const userUrl = answers.url;
const qrImage = qr.image(userUrl, { type: 'png' });
qrImage.pipe(fs.createWriteStream('qr-img.png'));
console.log('Gambar QR berhasil dibuat dan disimpan sebagai qr-code.png');

const filename = 'user-input.txt';

fs.writeFile(filename, userUrl, (err) => {
    if (err) {
      console.error('Gagal menyimpan input ke file:', err);
    } else {
      console.log(`Input berhasil disimpan ke ${filename}`);
    }
  });

}

// Jalankan fungsi utama
generateQRCode();
// 3. Create a txt file to save the user input using the native fs node module.

