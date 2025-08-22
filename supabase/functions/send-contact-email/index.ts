import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  socialLink: string;
  marketingNeeds: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received contact form submission");
    const formData: ContactFormData = await req.json();
    console.log("Form data:", formData);

    const { name, email, socialLink, marketingNeeds } = formData;

    // Validate required fields
    if (!name || !email || !socialLink) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Send email to dcthompson89@gmail.com
    console.log("Sending email to dcthompson89@gmail.com");
    const emailResponse = await resend.emails.send({
      from: "Digital Frontier Contact Form <onboarding@resend.dev>",
      to: ["dcthompson89@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ff; text-align: center; margin-bottom: 30px;">New Contact Form Submission</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Social Link:</strong> ${socialLink}</p>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Marketing Needs & Budget</h3>
            <p>${marketingNeeds || 'Not specified'}</p>
          </div>

          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #666;">
            <p>This email was sent from the Digital Frontier Company contact form.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the user
    console.log(`Sending confirmation email to ${email}`);
    const confirmationResponse = await resend.emails.send({
      from: "Digital Frontier Company <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Digital Frontier Company!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ff; text-align: center; margin-bottom: 30px;">Thank you for your submission!</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to Digital Frontier Company! We have received your inquiry and will get back to you within 24 hours.</p>
            <p>Our team is excited to help you with your digital marketing needs and will review your submission carefully.</p>
          </div>

          <div style="background: linear-gradient(135deg, #00ccff, #00ffcc); padding: 20px; border-radius: 8px; color: white; text-align: center;">
            <h3 style="margin-top: 0;">What happens next?</h3>
            <p>• We'll review your marketing needs and budget requirements</p>
            <p>• Our team will prepare a customized strategy proposal</p>
            <p>• You'll receive a follow-up email within 24 hours</p>
          </div>

          <div style="margin-top: 30px; text-align: center;">
            <p style="color: #666;">Best regards,<br><strong>The Digital Frontier Team</strong></p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours." 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email. Please try again or contact us directly at dcthompson89@gmail.com" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);