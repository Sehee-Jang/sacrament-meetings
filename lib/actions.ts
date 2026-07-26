"use server";
import { z } from "zod";
import {
  addMeeting,
  updateMeeting as updateMeetingRecord,
  deleteMeeting as deleteMeetingRecord,
} from "./meetings-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

const MeetingFormSchema = z.object({
  date: z.string().min(1, "Date is required."),
  meetingType: z.enum(["regular", "testimony", "stake", "general"]),
  presiding: z.string().min(2, "Presiding is required."),
  conducting: z.string().min(2, "Conducting is required."),

  openingPrayer: z.string().min(2, "Opening prayer is required."),
  closingPrayer: z.string().min(2, "Closing prayer is required."),

  openingHymnNumber: z.coerce.number(),
  openingHymnTitle: z.string().min(1, "Opening hymn title is required."),

  sacramentHymnNumber: z.coerce.number(),
  sacramentHymnTitle: z.string().min(1, "Sacrament hymn title is required."),

  closingHymnNumber: z.coerce.number(),
  closingHymnTitle: z.string().min(1, "Closing hymn title is required."),

  announcements: z.string().optional(),
  wardBusiness: z.string().optional(),

  speakerName: z.string().optional(),
  speakerTopic: z.string().optional(),
  speakerType: z.enum(["speaker", "musical-number"]).optional(),

  stakeBusiness: z.boolean(),
});

export type State = {
  message: string | null;
  errors: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    openingPrayer?: string[];
    closingPrayer?: string[];
    openingHymnNumber?: string[];
    openingHymnTitle?: string[];
    sacramentHymnNumber?: string[];
    sacramentHymnTitle?: string[];
    closingHymnNumber?: string[];
    closingHymnTitle?: string[];
    announcements?: string[];
    wardBusiness?: string[];
    speakerName?: string[];
    speakerTopic?: string[];
    speakerType?: string[];
    stakeBusiness?: string[];
  };
};

export async function createMeeting(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const raw = {
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),
    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),

    openingPrayer: formData.get("openingPrayer"),
    closingPrayer: formData.get("closingPrayer"),

    openingHymnNumber: formData.get("openingHymnNumber"),
    openingHymnTitle: formData.get("openingHymnTitle"),

    sacramentHymnNumber: formData.get("sacramentHymnNumber"),
    sacramentHymnTitle: formData.get("sacramentHymnTitle"),

    closingHymnNumber: formData.get("closingHymnNumber"),
    closingHymnTitle: formData.get("closingHymnTitle"),

    announcements: formData.get("announcements"),

    wardBusiness: formData.get("wardBusiness"),

    speakerName: formData.get("speakerName"),
    speakerTopic: formData.get("speakerTopic"),
    speakerType: formData.get("speakerType"),

    stakeBusiness: formData.get("stakeBusiness") === "true",
  };

  const parsed = MeetingFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      message: "Invalid meeting data.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  const meetingData = {
    date: data.date,

    meetingType: data.meetingType,

    presiding: data.presiding,

    conducting: data.conducting,

    announcements: data.announcements ? [data.announcements] : [],

    openingHymn: {
      number: data.openingHymnNumber,
      title: data.openingHymnTitle,
    },

    openingPrayer: data.openingPrayer,

    wardBusiness: data.wardBusiness
      ? [
          {
            description: data.wardBusiness,
          },
        ]
      : [],

    stakeBusiness: data.stakeBusiness,

    sacramentHymn: {
      number: data.sacramentHymnNumber,
      title: data.sacramentHymnTitle,
    },

    speakers: data.speakerName
      ? [
          {
            name: data.speakerName,
            topic: data.speakerTopic ?? "",
            type: data.speakerType ?? "speaker",
          },
        ]
      : [],

    closingHymn: {
      number: data.closingHymnNumber,
      title: data.closingHymnTitle,
    },

    closingPrayer: data.closingPrayer,
  };

  try {
    await addMeeting(meetingData);
    revalidatePath("/meetings");
  } catch (error) {
    console.error("Failed to create meeting:", error);
    throw new Error("Unable to create meeting. Please try again.");
  }
  redirect("/meetings");
}

export async function updateMeeting(
  id: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const raw = {
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),
    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),

    openingPrayer: formData.get("openingPrayer"),
    closingPrayer: formData.get("closingPrayer"),

    openingHymnNumber: formData.get("openingHymnNumber"),
    openingHymnTitle: formData.get("openingHymnTitle"),

    sacramentHymnNumber: formData.get("sacramentHymnNumber"),
    sacramentHymnTitle: formData.get("sacramentHymnTitle"),

    closingHymnNumber: formData.get("closingHymnNumber"),
    closingHymnTitle: formData.get("closingHymnTitle"),

    announcements: formData.get("announcements"),

    wardBusiness: formData.get("wardBusiness"),
    speakerName: formData.get("speakerName"),
    speakerTopic: formData.get("speakerTopic"),
    speakerType: formData.get("speakerType"),

    stakeBusiness: formData.get("stakeBusiness") === "true",
  };

  const parsed = MeetingFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      message: "Invalid meeting data.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  const meetingData = {
    date: data.date,

    meetingType: data.meetingType,

    presiding: data.presiding,

    conducting: data.conducting,

    announcements: data.announcements ? [data.announcements] : [],

    openingHymn: {
      number: data.openingHymnNumber,
      title: data.openingHymnTitle,
    },

    openingPrayer: data.openingPrayer,

    wardBusiness: data.wardBusiness
      ? [
          {
            description: data.wardBusiness,
          },
        ]
      : [],

    stakeBusiness: data.stakeBusiness,

    sacramentHymn: {
      number: data.sacramentHymnNumber,
      title: data.sacramentHymnTitle,
    },

    speakers: data.speakerName
      ? [
          {
            name: data.speakerName,
            topic: data.speakerTopic ?? "",
            type: data.speakerType ?? "speaker",
          },
        ]
      : [],

    closingHymn: {
      number: data.closingHymnNumber,
      title: data.closingHymnTitle,
    },

    closingPrayer: data.closingPrayer,
  };

  try {
    await updateMeetingRecord(id, meetingData);
    revalidatePath("/meetings");
  } catch (error) {
    console.error("Failed to update meeting:", error);
    throw new Error("Unable to update meeting. Please try again.");
  }

  redirect("/meetings");
}

export async function deleteMeeting(id: number) {
  try {
    await deleteMeetingRecord(id);
    revalidatePath("/meetings");
  } catch (error) {
    console.error("Failed to delete meeting:", error);
    throw new Error("Unable to delete meeting. Please try again.");
  }

  redirect("/meetings");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData, {
      redirectTo: "/meetings",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid email or password.";

        default:
          return "Something went wrong.";
      }
    }

    throw error;
  }
}
