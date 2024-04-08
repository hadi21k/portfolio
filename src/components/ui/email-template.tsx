import * as React from "react";
import {
  Html,
  Head,
  Body,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailTemplateProps = {
  name: string;
  message: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
}) => (
  <Html>
    <Head />
    <Preview>This message is sent by {name}</Preview>
    <Tailwind>
      <Body>
        <Container>
          <Section>
            <Text className="text-center text-2xl">
              This message is sent by {name}
            </Text>
            <Hr />
            <Text className="text-lg font-medium text-[#777]">{message}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
