import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="group border p-4 rounded shadow transition duration-300 transform hover:shadow-md hover:-translate-y-1">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5 items-center">
          <EyeIcon className="h-6 w-6 text-blue-500" />
          <span className="text-base font-medium">{views}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-base font-medium truncate">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-2xl font-semibold truncate">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Placeholder"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="text-gray-700 mt-2">{description}</p>
        <img
          src={image}
          alt="placeholder"
          className="w-full h-auto rounded mt-2"
        />
      </Link>

      <div className="flex justify-between items-center gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-base font-medium">{category}</p>
        </Link>
        <Button asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
