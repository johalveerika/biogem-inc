export type Treatment = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  duration: string;
  experience: string;
  image: string;
  gallery?: string[];
  tagline: string;
  purpose: string;
  howItWorks: string[];
  benefits: string[];
  idealFor: string[];
  session: string;
  accent: string;
};

export const treatments: Treatment[] = [
  {
    slug: "hyperbaric-oxygen-cube",
    name: "Hyperbaric Oxygen Cube",
    shortName: "Oxygen Cube",
    category: "Cellular Recovery",
    duration: "60–90 minutes",
    experience: "Seated · Quiet · Non-invasive",
    image: "/images/hbot-cube.jpg",
    tagline: "Breathe more oxygen. Give every cell a richer environment to repair.",
    purpose:
      "The Hyperbaric Oxygen Cube is designed to increase the amount of oxygen your blood can carry. In a comfortably pressurized sitting chamber you breathe a higher concentration of oxygen than room air can provide. The purpose is simple: injured, inflamed, or under-performing tissues need more oxygen than everyday breathing delivers. Extra oxygen in plasma can reach areas that are starved for it, supporting tissue repair, immune function, and recovery after stress or strain.",
    howItWorks: [
      "You settle into a private sitting cube. The door seals and pressure rises gradually—typically in the mild wellness range used in regenerative clinics.",
      "Under higher atmospheric pressure, your lungs gather more oxygen than they can at sea level. That oxygen dissolves into plasma as well as red blood cells.",
      "Circulation carries this oxygen-rich blood throughout the body, including tissues with limited blood flow.",
      "Clinically studied effects of hyperbaric oxygen include reduced swelling, support for new blood-vessel growth, and help for white blood cells fighting infection. Wellness guests also use it for energy, focus, and post-training recovery.",
    ],
    benefits: [
      "Supports tissue repair and collagen formation",
      "May reduce inflammation and swelling",
      "Encourages circulation and new capillary growth",
      "Used for recovery, mental clarity, and immune support",
      "Calm, seated session—many guests read or rest",
    ],
    idealFor: [
      "Guests focused on recovery after injury or intense training",
      "Those seeking cognitive clarity and cellular energy",
      "Anyone building a longevity or regenerative protocol",
    ],
    session:
      "Sessions typically last 60 to 90 minutes. You remain seated, breathing normally, while our team monitors comfort. Ears may feel a gentle pressure change—similar to takeoff on a flight—which usually eases with swallowing.",
    accent: "from-sky-200/40 to-emerald-100/20",
  },
  {
    slug: "red-light-therapy",
    name: "Red Light Therapy Bed",
    shortName: "Red Light Bed",
    category: "Photobiomodulation",
    duration: "15–20 minutes",
    experience: "Full body · Warm glow · No UV",
    image: "/images/redlight-clinic.jpg",
    gallery: ["/images/redlight-clinic.jpg", "/images/red-light-bed.jpg"],
    tagline: "14,400 LEDs. One full-body reset for skin, joints, and cellular energy.",
    purpose:
      "Red and near-infrared light therapy—photobiomodulation—is used to stimulate mitochondria, the energy centres of your cells. When those “power plants” work more efficiently, tissues have more ATP to repair skin, ease discomfort, and rebuild collagen. Biogem’s continuous-wave light bed bathes the entire body in high-intensity red and infrared LEDs, including Nogier frequencies used in advanced wellness protocols.",
    howItWorks: [
      "You lie in an open, clamshell-style bed lined with thousands of medical-grade LEDs. There is no ultraviolet light and no tan.",
      "Red wavelengths (roughly 630–700 nm) act closer to the skin, supporting collagen, circulation, and surface repair.",
      "Near-infrared light travels deeper into muscle and joint tissue, where it is used to support ATP production and ease of movement.",
      "Activated cellular energy can increase fibroblast activity (collagen), improve local blood flow, and help modulate inflammation.",
    ],
    benefits: [
      "Supports skin elasticity, tone, and a more even complexion",
      "Used for chronic and acute discomfort without downtime",
      "May aid wound healing and tissue recovery",
      "Promotes circulation and a sense of warmth and ease",
      "A short, consistent session that fits a busy week",
    ],
    idealFor: [
      "Guests seeking skin vitality and anti-aging support",
      "Athletes and anyone with sore, overworked muscles",
      "Those pairing light therapy with detox, oxygen, or core work",
    ],
    session:
      "Most full-body sessions last about 15–20 minutes. Protective eyewear is provided. Results build with a series—photobiomodulation is a rhythm, not a one-time event.",
    accent: "from-rose-300/30 to-amber-100/20",
  },
  {
    slug: "theta-chamber",
    name: "Theta Chamber",
    shortName: "Theta Chamber",
    category: "Neuro-Wellness",
    duration: "About 30–45 minutes",
    experience: "Immersive · Sound, light & motion",
    image: "/images/theta-clinic.jpg",
    gallery: ["/images/theta-clinic.jpg", "/images/theta-chamber.jpg"],
    tagline: "Guide the brain into theta—the frequency of deep rest, memory, and reset.",
    purpose:
      "The Theta Chamber (also called a Theta Pod) is an advanced neuro-wellness device designed to help your brain enter the theta brainwave state. Theta is the quiet, restorative frequency associated with deep meditation, memory integration, and nervous-system balance—often hard to reach when you are overstimulated. The chamber combines vestibular motion, sound, light, and precisely tuned frequency stimulation so the brain can follow those rhythms (a process called brainwave entrainment) and step out of constant fight-or-flight.",
    howItWorks: [
      "You recline in a private enclosed pod with headphones. The canopy closes around a calm, blue-lit interior.",
      "Sound, light, and gentle motion work together. Electrical frequency impulses invite the brain’s Frequency-Following Response, encouraging electrocortical activity to settle into theta.",
      "In that state, the nervous system can downshift. Many guests describe a depth of rest they cannot reach by trying to meditate on their own.",
      "Over a series of sessions, the goal is not a single calm hour—it is helping the brain remember how to access balance, focus, and recovery more easily.",
    ],
    benefits: [
      "Deep relaxation and stress reduction",
      "Support for mental clarity, focus, and mood",
      "May improve sleep quality and recovery",
      "Used for anxiety, overwhelm, and cognitive fatigue",
      "May ease tension headaches and support pain modulation",
      "A tool for emotional reset and athletic concentration",
    ],
    idealFor: [
      "High-performing minds that will not switch off",
      "Guests with stress, restless sleep, or brain fog",
      "Anyone building a head-to-toe regenerative plan",
    ],
    session:
      "You simply rest. There is nothing to “do.” Most people feel a wave of calm after the first visit; sleep, focus, and emotional steadiness often deepen with a recommended series.",
    accent: "from-indigo-300/30 to-sky-100/20",
  },
  {
    slug: "ion-foot-detox",
    name: "Ion Foot Detox",
    shortName: "Ion Foot Detox",
    category: "Reset Ritual",
    duration: "About 30 minutes",
    experience: "Seated · Soaking · Restorative",
    image: "/images/ion-foot-detox.jpg",
    tagline: "A quiet soak. Charged water. A gentle ritual to close the week lighter.",
    purpose:
      "Ionic foot detox is a spa-style wellness treatment. You sit comfortably with your feet in a mineral basin while a low-level current ionizes the water. In wellness practice it is offered as a relaxing way to support circulation in the feet and legs, encourage a sense of release, and give the nervous system a pause. Guests often book it as a standalone reset or as a complement to infrared detox, oxygen, and light therapies.",
    howItWorks: [
      "Your feet rest in warm water with a professional ion array. A gentle current charges particles in the water.",
      "You remain seated, usually for about 30 minutes, while the water’s appearance may change—an effect of minerals and ionization in the basin.",
      "The experience is quiet and grounding. Many people use the time to breathe, unclench the jaw, and let the week drop out of the shoulders.",
      "Practitioners position it as support for energy, ease in the joints, and a feeling of cleanliness after travel, training, or a demanding stretch of life.",
    ],
    benefits: [
      "Deeply relaxing, low-effort session",
      "Encourages a sense of lightness and circulation in the feet",
      "A popular add-on to full-body detox protocols",
      "Guests often report clearer thinking and better rest that evening",
      "Suitable as a gentle first visit to the clinic",
    ],
    idealFor: [
      "Anyone who wants a calming introduction to Biogem",
      "Guests pairing detox, infrared, or recovery treatments",
      "Tired legs after travel, standing work, or training",
    ],
    session:
      "Expect a private chair, warm water, and about half an hour of stillness. Wear clothing you can comfortably roll or lift at the ankles. Your consultation will confirm whether the treatment is a good fit.",
    accent: "from-teal-200/30 to-stone-100/30",
  },
  {
    slug: "vibex-bed",
    name: "VibeX Healing Bed",
    shortName: "VibeX Bed",
    category: "Vibroacoustic Therapy",
    duration: "30–45 minutes",
    experience: "Reclined · Sound you can feel",
    image: "/images/vibex-clinic.jpg",
    gallery: ["/images/vibex-clinic.jpg", "/images/vibex-bed.jpg"],
    tagline: "Frequency, vibration, and light—sound that travels through tissue, not just the ears.",
    purpose:
      "The VibeX Healing Bed is a vibroacoustic therapy system. Embedded transducers deliver therapeutic frequencies through the body so you do not only hear sound—you feel it in muscle, fascia, and bone. The purpose is to use mechanotransduction: cells converting mechanical vibration into biochemical signals. Combined with colour light, the bed is used for deep relaxation, pain ease, nervous-system regulation, and emotional settling.",
    howItWorks: [
      "You lie fully supported on a padded table. Transducers under the surface send low-frequency vibration through the body while music or tones play.",
      "Unlike ordinary speakers, the signal is physical. Tissues interpret vibration even though they do not “hear.”",
      "Low frequencies are used to reduce guarding in tight muscle and fascia, invite parasympathetic (rest-and-digest) tone, and quiet mental chatter.",
      "Colour panels on the bed add chromotherapy—another sensory cue for the nervous system to downshift.",
    ],
    benefits: [
      "Targets deep tissue, joints, and fascia for ease and comfort",
      "Calms the nervous system; used for anxiety and stress",
      "May support sleep by reducing mental noise",
      "Encourages circulation and lymphatic movement after training",
      "A non-talking modality for emotional release and recovery",
    ],
    idealFor: [
      "Guests carrying chronic tension or stored stress in the body",
      "Athletes needing a recovery session that is not another workout",
      "Anyone who finds stillness difficult unless the body is occupied",
    ],
    session:
      "Lie down, close your eyes, and let the bed work. Sessions are typically 30–45 minutes. Many people leave heavier in the limbs and quieter in the mind.",
    accent: "from-emerald-300/25 to-lime-100/20",
  },
  {
    slug: "iyashi-dome",
    name: "Iyashi Dome",
    shortName: "Iyashi Dome",
    category: "Full-Body Detox",
    duration: "About 45 minutes",
    experience: "Far infrared · Head remains cool",
    image: "/images/iyashi-clinic.jpg",
    gallery: ["/images/iyashi-clinic.jpg", "/images/iyashi-dome.jpg"],
    tagline: "Japanese infratherapy. A deep, purifying sweat—without the heavy air of a traditional sauna.",
    purpose:
      "The authentic Iyashi Dôme is a Japanese far-infrared treatment created for wellness, beauty, and recovery. Far infrared warms the body from within rather than superheating the room. The result is an intensive, comfortable sweat used for detoxification support, skin vitality, metabolic effort, muscle recovery, and deeper sleep. Japanese tradition buried the body in mineral-warmed sand; the Dome continues that idea with precision infrared technology.",
    howItWorks: [
      "You lie on a padded bed. Sliding white domes close over the body while your head remains outside on a pillow—so you stay clear-headed while the body heats.",
      "Long-wave infrared is absorbed by tissue, raising core temperature and prompting a deep sweat at a more tolerable ambient heat than a Finnish sauna.",
      "Sessions are used to support elimination through sweat, circulation, fibroblast activity in the skin, and a reset of circadian calm afterward.",
      "Manufacturer-cited clinical work on the device has explored detoxification markers, slimming metrics, skin quality, and recovery—your clinician will discuss what is realistic for you.",
    ],
    benefits: [
      "Deep detoxification support through intensive sweating",
      "Skin benefits: hydration, elasticity, and a brighter tone",
      "Metabolic effort comparable to a demanding cardio session in sweat volume",
      "Muscle relaxation and circulation for sport recovery",
      "Endorphin lift and support for sleep and nervous-system ease",
      "A gentler heat experience than a conventional sauna for many guests",
    ],
    idealFor: [
      "Guests focused on detox, skin, or body-composition goals",
      "Athletes preparing or recovering from training",
      "Anyone who wants heat therapy without a claustrophobic hot room",
    ],
    session:
      "Plan about 45 minutes plus a brief cool-down. Hydrate before and after. A consultation screens for conditions that make infrared heat unwise.",
    accent: "from-amber-200/35 to-stone-100/20",
  },
  {
    slug: "allcore-360",
    name: "AllCore360°",
    shortName: "AllCore360",
    category: "Core & Longevity",
    duration: "10 minutes",
    experience: "Seated · No impact · Gravity-based",
    image: "/images/allcore-clinic-upright.jpg",
    gallery: ["/images/allcore-clinic-upright.jpg", "/images/allcore-360.jpg"],
    tagline: "A 90-minute core workout, distilled into 10 gravity-powered minutes.",
    purpose:
      "AllCore360° is a patented, computer-controlled core system. You sit in a harnessed chair that tilts and slowly rotates, using gravity—not crunches or floor planks—to recruit more than 50 deep core muscles at once. The purpose is a balanced “natural corset” around the spine: stability, posture, and pain-free movement for athletes, seniors, and anyone rebuilding after injury. Biogem is an official AllCore360 partner location in Burlington.",
    howItWorks: [
      "You are secured in the chair. A therapist sets the tilt angle to your strength and goal using the system’s software.",
      "The platform rotates through 360°. Your job is to stay tall and centred—an isometric 360° plank.",
      "Deep stabilizers fire: transverse abdominis, multifidus, pelvic floor, diaphragm, and the muscles that keep you upright in space.",
      "There is no pounding on wrists, knees, or the lumbar spine. Progress is tracked so you can see balance and endurance change over weeks.",
    ],
    benefits: [
      "Strengthens 50+ deep core muscles in ten minutes",
      "Used to improve posture and reduce low-back discomfort",
      "Builds balance, coordination, and proprioception—key for fall prevention",
      "Customizable from rehabilitation to performance",
      "No-impact training suitable for many mobility levels",
    ],
    idealFor: [
      "Chronic back tightness or a “soft” midsection from sitting",
      "Seniors protecting independence and balance",
      "Athletes who need a stronger, more even core",
      "Guests who cannot get down to the floor for traditional core work",
    ],
    session:
      "Many guests feel the core “switch on” after the first ride, notice posture after two sessions, and see measurable change around a month of consistent visits. Eight weeks is a common horizon for life-changing stability.",
    accent: "from-red-200/25 to-stone-100/20",
  },
];

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export const treatmentSlugs = treatments.map((treatment) => treatment.slug);
