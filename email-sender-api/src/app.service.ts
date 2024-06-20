import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(email: string) {
    try {
      console.log('Sending email to:', email);
      await this.mailerService.sendMail({
        to: email,
        subject: 'Test Email',
        template: './email', // Chỉ cần tên file, không cần phần mở rộng .hbs
        context: {
          email,
        },
        attachments: [
          {
            filename: 'test.txt', // Tên file đính kèm
            path: join(__dirname, '..', 'src', 'attachments', 'demo.txt'), // Đường dẫn tới file đính kèm
          },
        ],
      });
      console.log('Email sent successfully');
      return { message: 'Email sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}
