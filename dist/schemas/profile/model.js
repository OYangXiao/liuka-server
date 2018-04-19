"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const profileSchema = new Schema({
    uid: { type: Number, index: true },
    settings: {
        country: String,
        province: String,
        city: String,
        school: String,
        education: String,
        profession: String,
        industry: String,
        org: String,
        job: String,
        intro: String,
        contact: String
    },
    note: {
        savedUserCount: { type: Number, default: 0 },
        savedCaseCount: { type: Number, default: 0 },
        savedTagCount: { type: Number, default: 0 },
        saveMeCount: { type: Number, default: 0 },
        likeMeCount: { type: Number, default: 0 }
    }
});
mongoose_1.default.model('Profile', profileSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2NoZW1hcy9wcm9maWxlL21vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUFnQztBQUNoQyxNQUFNLE1BQU0sR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQztBQUcvQixNQUFNLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUNoQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQWtDO0lBQ2xFLFFBQVEsRUFBRTtRQUNULE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLE1BQU07UUFDaEIsSUFBSSxFQUFFLE1BQU07UUFFWixNQUFNLEVBQUUsTUFBTTtRQUNkLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFVBQVUsRUFBRSxNQUFNO1FBRWxCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEdBQUcsRUFBRSxNQUFNO1FBQ1gsR0FBRyxFQUFFLE1BQU07UUFFWCxLQUFLLEVBQUUsTUFBTTtRQUViLE9BQU8sRUFBRSxNQUFNO0tBQ2Y7SUFHRCxJQUFJLEVBQUU7UUFDTCxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDNUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQzVDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUMzQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDekMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO0tBQ3pDO0NBeUNELENBQUMsQ0FBQztBQUVILGtCQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyJ9