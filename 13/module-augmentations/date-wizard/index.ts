// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.
    function dateWizard(date: string, format: string): string;
    interface DateDetails {
        year: number;
        month: number;
        date: number;
        hours: number;
        minutes: number;
        seconds: number;
    }
    function dateDetails(date: Date): DateDetails;
    function utcDateDetails(date: Date): DateDetails;
    function pad(s: number):string;
}
