"use server"

import React from 'react';
import type { ContactFormValues } from '@/lib/validations';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/ui/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
    name,
    email,
    message
}: ContactFormValues) => {

    await resend.emails.send({
        from: `${name} <onboarding@resend.dev>`,
        to: process.env.EMAIL!,
        subject: `New message from ${name}`,
        reply_to: email,
        react: React.createElement(EmailTemplate, { name, message }),
    });
}