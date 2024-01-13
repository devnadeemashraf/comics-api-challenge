import { useContext, useEffect, useState } from "react";
import { Loader2, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

import { getComicByID } from "@/http";
import { TComic } from "@/types/api-response";
import { AppContext } from "@/components/providers/app-context";

const ComicCard = () => {
  const { toast } = useToast();
  const { viewed, setViewed } = useContext(AppContext);

  const [currentComicIndex, setCurrentComicIndex] = useState<number>(1);
  const [rating, setRating] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [comic, setComic] = useState<TComic>({
    month: "",
    num: 0,
    link: "",
    year: "",
    news: "",
    safe_title: "",
    transcript: "",
    alt: "",
    img: "",
    title: "",
    day: "",
  });

  const fetchComic = () => {
    setLoading(true);
    getComicByID({ id: currentComicIndex })
      .then(({ data }: { data: TComic }) => {
        setComic(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmitClick = () => {
    if (rating == null) {
      // We have not rated the comic yet
      toast({
        title: "Uh Oh!",
        description: "Please Rate the Comic first!",
      });
    } else {
      // Submit Rating
      const currentComic = {
        currentComicIndex: {
          month: comic.month,
          num: comic.num,
          link: comic.link,
          year: comic.year,
          news: comic.news,
          safe_title: comic.safe_title,
          transcript: comic.transcript,
          alt: comic.alt,
          img: comic.img,
          title: comic.title,
          day: comic.day,
          rating: rating,
        },
      };
      const updatedViewed = viewed;
      updatedViewed.push(currentComic);
      setViewed(updatedViewed);

      setCurrentComicIndex((prevIndex: number) => prevIndex + 1);
      setRating(null);
    }
  };

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  useEffect(() => {
    fetchComic();
  }, [currentComicIndex]);

  if (loading) {
    return (
      <Card className="min-w-[620px] min-h-[500px] flex flex-col items-center justify-center">
        <Loader2 className="animate-spin" />
      </Card>
    );
  }

  return (
    <Card className="min-w-[620px] min-h-[500px] flex flex-col items-center justify-between">
      <CardHeader className="w-full h-auto">
        <CardTitle>{comic.safe_title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-full flex items-center justify-center">
        <img src={comic.img} alt={comic.alt} />
      </CardContent>
      <CardFooter className="w-full h-auto flex items-center justify-between">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleStarClick(star)}
              style={{
                cursor: "pointer",
                color: star <= (rating || 0) ? "gold" : "gray",
                fill: star <= (rating || 0) ? "gold" : "gray",
              }}
            >
              <Star
                className={
                  star <= (rating || 0) ? "fill-yellow-500" : "fill-gray-500"
                }
              />
            </span>
          ))}
          {rating == null ? 0 : rating}/5
        </div>
        <Button onClick={handleSubmitClick}>Submit Rating</Button>
      </CardFooter>
    </Card>
  );
};

export default ComicCard;
