import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fhvyejghylntcyvatwuq.supabase.co";
const supabaseApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodnllamdoeWxudGN5dmF0d3VxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTA3NDQ2NywiZXhwIjoyMDU2NjUwNDY3fQ.HVjcJY5O6ZsToeFUwQUoac6dwVTUEqxP5Otc-MpirrA";

export const supabase = createClient(supabaseUrl, supabaseApiKey);

export async function getAllImages(table) {
    const {data, error} = await supabase.from(table).select("*")

    if (error) {
        console.log("error: ", error)
        return []
    }

    return data
}

export async function getCustomImages(gameId) {
    const {data, error} = await supabase.from('custom_images').select("*").eq('game_id', gameId)

    if (error) {
        console.log("error: ", error)
        return []
    }

    return data

}

export async function getAllScores(table) {
    const {data, error} = await supabase.from(table).select("*")

    if (error) {
        console.log("error: ", error)
        return []
    }

    return data
}

export async function writeScore(table, data) {
    const { error } = await supabase
            .from(table)
            .insert([{ name: data.name, score: data.score }]);

        if (error) {
            message = 'Failed to submit score!';
            console.error(error);
        }
}

export async function uploadImage(file, gameId) {

    const filePath = `${gameId}/${Date.now()}_${file.name}`

    const { data, error } = await supabase.storage
        .from('images')
        .upload(filePath, file)

    if (error) {
        console.error('Error uploading file:', error.message)
        return
    }

    const { data: publicUrlData } = supabase.storage
      .from('images')
      .getPublicUrl(filePath)

    let imageUrl = publicUrlData.publicUrl
    return imageUrl
}

export async function writeCustomGame(gameId) {
    const { data, error } = await supabase
            .from('custom_games')
            .insert([{ image_folder: gameId }])
            .select("id")

        if (error) {
            message = 'Failed to create game!';
            console.error(error);
        }

    return data[0].id 
}

export async function writeCustomImage(round, gameId) {
    const { error } = await supabase
            .from('custom_images')
            .insert([{ 
                image_path: round.image_url,
                latitude: round.location[0],
                longitude: round.location[1],
                description: round.description,
                attribution: round.attribution,
                year: round.year,
                game_id: gameId
             }]);

        if (error) {
            message = 'Failed to submit image!';
            console.error(error);
        }
}