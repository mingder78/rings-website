import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Mail,
  Video,
  Linkedin,
} from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="flex">
      {/* Circle Outline Style */}
      <a
        href="https://www.instagram.com/szu_yiwang"
        className="btn btn-outline btn-primary px-1"
      >
        <Instagram size={20} />
      </a>
      <a
        href="https://vimeo.com/szuyiwang"
        className="btn btn-outline btn-primary px-1"
      >
        <Video size={20}></Video>
      </a>
      <a
        href="mailto:szuyi.sywang@gmail.com"
        className="btn btn-outline btn-primary px-1"
      >
        <Mail size={20}></Mail>
      </a>
      <a
        href="https://www.facebook.com/sywangszuyi"
        className="btn btn-outline btn-primary  px-1"
      >
        <Facebook size={20} />
      </a>
      <a
        href="http://linkedin.com/in/szu-yi-wang-251b1b19"
        className="btn btn-outline btn-primary  px-1"
      >
        <Linkedin size={20} className="text-info" />
      </a>
      <a
        href="https://twitter.com/szuyi_wang"
        className="btn btn-outline btn-primary  px-1"
      >
        <Twitter size={20} className="text-info" />
      </a>
    </div>
  );
};

export default SocialIcons;
