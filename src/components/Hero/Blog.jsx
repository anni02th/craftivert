import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
    const { id } = useParams();

    // Mock blog data
    const blogs = {
        1: {
            type: "Visitor History",
            title: 'Visitor History',
            content: 'Securing your digital world with trusted data protection solutions. Detailed information about Visitor History management and its importance in securing your digital assets. This includes tracking user interactions, understanding behavior patterns, and ensuring compliance with data protection regulations. Visitor history is crucial for improving user experience and enhancing security protocols.',
            img: "/feature-1.webp",
        },
        2: {
            type: "Security Risks",
            title: 'Security Risks',
            content: 'This article discusses various security risks organizations face today, including phishing attacks, malware threats, and data breaches. Understanding these risks is vital for developing effective security strategies and protecting sensitive information from unauthorized access.',
            img: "/feature-2.webp",
        },
        3: {
            type: "Banner Clicks",
            title: 'Banner Clicks',
            content: 'Analyzing banner clicks provides insights into user behavior and helps improve marketing strategies. This article explores effective analysis techniques to understand what attracts users and how to optimize banner placements for better engagement.',
            img: "/feature-3.webp",
        },
        4: {
            type: "Data Encryption",
            title: 'Data Encryption',
            content: 'Understanding data encryption is crucial for protecting sensitive information. This article covers various encryption methods and their importance in today\'s digital landscape, including symmetric and asymmetric encryption techniques.',
            img: "/feature-4.webp",
        },
        5: {
            type: "User Authentication",
            title: 'User Authentication',
            content: `# Feeling the Vibe: How Great Design Connects with Emotions

Have you ever walked into a store and felt instantly calm, happy, or even inspired? Or maybe you scrolled through a website and thought, “Wow, this feels so... me.” That’s not by accident. It’s design working its magic. Design has the power to stir emotions, to connect with people on a deeply personal level. And it’s everywhere—from the colors on your favorite app to the packaging of your morning coffee.

Let’s dive into how design can create those feelings, with some real-world examples to show just how powerful it can be.

---

### The Color of Your Mood

Ever notice how some brands seem to give off a specific vibe? That’s often thanks to color psychology. Colors are like emotional shortcuts—they can instantly set the mood or convey a message.

Think about **Coca-Cola’s bright red**. It’s energetic, exciting, and bold. Red is often associated with passion and energy, and Coca-Cola’s branding taps into that to make you feel like their drink is all about fun and good times.

On the other hand, **Spotify’s green** feels fresh and vibrant, a subtle nudge that their app is your go-to space for growth, discovery, and connection through music. And then there’s **Apple’s sleek black and white palette**, which screams simplicity and sophistication. It’s not just about the products; it’s about how you feel using them.

---

### Fonts That Speak to You

Yes, even fonts can make you feel things. Think of **Disney’s curly, playful font**. It instantly reminds you of childhood, magic, and adventure. Compare that to **The New York Times’ serious serif font**. It’s classic and authoritative, giving you the impression that what you’re reading is trustworthy and important.

A great example? When Netflix redesigned its logo, it moved to a sleek, bold font that’s clean and modern. This change wasn’t just for aesthetics; it made the brand feel sharper and more forward-thinking, perfectly matching its binge-worthy content.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd95aa67-4724-4645-b261-6780bdcc189d/02b0345e-e2f3-4df0-9e73-10f3ee99169d/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd95aa67-4724-4645-b261-6780bdcc189d/c91e269b-333a-4ef4-b1c3-3acc4b85486c/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd95aa67-4724-4645-b261-6780bdcc189d/fa76410c-9248-4e29-b78d-9a4843dc1f38/image.png)

---

### Layouts That Feel Just Right

Ever visited a website and thought, “This is so easy to use”? That’s good layout design at work. Great layouts guide your eyes, making you feel at ease while navigating.

Take **Airbnb’s app**. It’s not just a place to book stays; it feels like you’re embarking on an adventure. Their clean, user-friendly layout gives you room to dream about your next trip. The design is intentional—it makes the process of booking feel exciting and stress-free.

Now contrast that with poorly designed sites that feel cluttered or overwhelming. Those don’t just look bad; they make you feel frustrated. Good design should always make life easier, not harder.

![Airbnb UI](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd95aa67-4724-4645-b261-6780bdcc189d/eb8b3adf-94f1-4116-96df-9b7e7132ee20/a7463cb4-7edc-4922-b9d6-4c1740557a10.png)

Airbnb UI

---

### Packaging That’s More Than Just a Box

When you buy a product, the experience doesn’t start when you open it. It starts with the packaging. Ever unbox an iPhone? The minimal, perfectly aligned packaging feels like you’re unwrapping something truly special. That’s deliberate. Apple wants you to associate its products with premium quality, and the packaging plays a huge role in setting that tone.

![iPhone packaging](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd95aa67-4724-4645-b261-6780bdcc189d/b8cd5189-d25b-40ff-92f3-6d0935faf746/image.png)

iPhone packaging

---

### Spaces That Make You Feel Something

It’s not just about screens and products. Physical spaces can also evoke emotions through design. Walk into a **Starbucks**, and you’re greeted with warm lighting, earthy tones, and cozy seating. It’s all designed to make you feel comfortable, like it’s your second home.

Contrast that with **IKEA’s showrooms**, which inspire creativity. Each setup makes you think, “I could live like this.” Their spaces are designed to make you dream and visualize possibilities for your own home.

![Starbucks store](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd95aa67-4724-4645-b261-6780bdcc189d/b9f6cd21-53a3-4382-85fe-2c79f6efb007/image.png)

Starbucks store

![IKEA’s showroom](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd95aa67-4724-4645-b261-6780bdcc189d/37bcbcac-dbd2-4804-af59-95e9d2a3821f/image.png)

IKEA’s showroom

---

### How to Design for Emotion

So, how do designers create these emotional connections? It’s not magic; it’s about understanding human psychology and being intentional with every choice.

1. **Know Your Audience**: The first step is understanding who you’re designing for. What do they love? What do they need? If you’re designing for busy parents, your app should feel intuitive and stress-free. If it’s for young creatives, it should feel bold and inspiring.
2. **Use Storytelling**: Great design tells a story. Take **Nike’s “Just Do It” campaign**. It’s not just a slogan; it’s a feeling. Every design element—the bold typeface, the gritty imagery—tells a story of determination and achievement.
3. **Test the Feel**: Once the design is ready, ask people how it makes them feel. Do they feel the excitement, calm, or confidence you were aiming for? If not, tweak it until the emotions align.
4. **Stay Authentic**: Emotional design isn’t about manipulation. It’s about creating genuine connections. That means being authentic in every choice, from the colors you pick to the message you share.

---

### How Craftivert Designs for Emotions

Designing for emotions is no easy task, but that’s where **Craftivert** excels. We believe that great design isn’t just about looking good—it’s about making people feel something. Whether you’re launching a brand, revamping a website, or creating packaging that wows, we’re here to help you create designs that truly connect.

**Let’s craft something unforgettable together. Reach out to Craftivert today, and let’s make your audience feel the vibe.`,
            img: "/feature-5.webp",
        },
    };

    const blog = blogs[id];
    const [isExpanded, setIsExpanded] = useState(false); // State to manage expanded content

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className="container mx-auto p-8">
            {blog ? (
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                    <p className="text-lg font-semibold text-gray-600 mb-2">{blog.type}</p>
                    <img src={blog.img} alt={blog.title} className="w-full h-auto rounded-lg mb-4" />
                    <p className="text-lg leading-relaxed">
                        {isExpanded ? blog.content : `${blog.content.substring(0, 10000)}...`}
                        <button
                            onClick={toggleExpand}
                            className="text-blue-500 hover:underline ml-2"
                        >
                            {isExpanded ? 'Show Less' : 'Read More'}
                        </button>
                    </p>
                </div>
            ) : (
                <p className="text-red-500">Blog not found.</p>
            )}
        </div>
    );
};

export default BlogPage;
